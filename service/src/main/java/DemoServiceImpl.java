import io.grpc.stub.StreamObserver;

public class DemoServiceImpl extends DemoServiceGrpc.DemoServiceImplBase {
	@Override
	public void sum(Service.SumRequest request, StreamObserver<Service.SumResponse> responseObserver) {
		int num1 = request.getNum1();
		int num2 = request.getNum2();

		int result = num1 + num2;

		// creating the response payload
		Service.SumResponse response = Service.SumResponse.newBuilder().setSum(result).build();

		// sending the payload
		responseObserver.onNext(response);
		responseObserver.onCompleted();
	}

	@Override
	public StreamObserver<Service.ChatRequest> chat(StreamObserver<Service.ChatResponse> responseObserver) {
		return new StreamObserver<Service.ChatRequest>() {
			@Override
			public void onNext(Service.ChatRequest chatRequest) {
				String message = chatRequest.getMessage();

				Service.ChatResponse response = Service.ChatResponse.newBuilder()
						.setReply("server says thanks for sending: " + message)
						.build();

				responseObserver.onNext(response);
			}

			@Override
			public void onError(Throwable throwable) {

			}

			@Override
			public void onCompleted() {
				responseObserver.onCompleted();
			}
		};
	}
}
