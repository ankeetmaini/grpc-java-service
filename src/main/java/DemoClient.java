import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

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
	public static void main(String[] args) {
		DemoClient client = new DemoClient();

		client.getSum();
	}
}
