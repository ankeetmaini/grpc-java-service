import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.stub.StreamObserver;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class DemoClient {
	// step 1 - creating the channel
	ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 3000)
			.usePlaintext()
			.build();

	private void getSum() {
		// step 2 - creating the stub
		DemoServiceGrpc.DemoServiceBlockingStub stub = DemoServiceGrpc.newBlockingStub(channel);

		// request
		Service.SumRequest request = Service.SumRequest.newBuilder()
				.setNum1(10)
				.setNum2(20)
				.build();

		// step 3 - call the service
		Service.SumResponse response = stub.sum(request);

		// print the result
		System.out.println("Response from gRPC service: " + response.getSum());

	}

	private Service.ChatRequest create(String message) {
		return Service.ChatRequest.newBuilder().setMessage(message).build();
	}

	private void chat() throws InterruptedException {
		DemoServiceGrpc.DemoServiceStub stub = DemoServiceGrpc.newStub(channel);

		CountDownLatch latch = new CountDownLatch(1);

		StreamObserver<Service.ChatRequest> request = stub.chat(new StreamObserver<Service.ChatResponse>() {
			@Override
			public void onNext(Service.ChatResponse chatResponse) {
				// called everytime server replies
				System.out.println(chatResponse.getReply());
			}

			@Override
			public void onError(Throwable throwable) {

			}

			@Override
			public void onCompleted() {
				// server is done now
				// we can close client
				latch.countDown();
			}
		});

		request.onNext(create("1st message from client"));
		request.onNext(create("2nd message from client"));
		request.onNext(create("3rd message from client"));
		request.onNext(create("4th message from client"));

		request.onCompleted();

		latch.await(4L, TimeUnit.SECONDS);
	}

	public static void main(String[] args) throws InterruptedException {
		DemoClient client = new DemoClient();

		client.getSum();
		client.chat();
	}
}
