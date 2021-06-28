
import { grpc } from "@improbable-eng/grpc-web";
import { SumRequest } from "./generated/service_pb";
import { DemoService } from "./generated/service_pb_service";

const sumForm = document.getElementById("sum-form");
const sumResult = document.getElementById("sum-response");

const callSumService = (a:number, b:number) => {

	const request = new SumRequest();
	request.setNum1(a);
	request.setNum2(b);

	grpc.unary(DemoService.Sum, {
		request,
		host: 'http://localhost:3000/api',
	 	onEnd: res => {
    	const { status, statusMessage, headers, message, trailers } = res;
    	if (status === grpc.Code.OK && message) {
				if (sumResult) {
					sumResult.innerHTML = "gRPC response: " + message.toObject().sum;
				}
    	}
		}
	});
}

if (sumForm) {
	sumForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const numbers = [...sumForm.elements].filter(e => e.value).map(e => parseInt(e.value));
		const [a, b] = numbers;
		callSumService(a, b);
	});
}


