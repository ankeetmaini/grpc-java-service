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
}
