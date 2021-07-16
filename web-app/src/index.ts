import { DemoServiceClient } from "./generated/ServiceServiceClientPb";
import { SumRequest } from "./generated/service_pb";


const sumForm = document.getElementById("sum-form");
const sumResult = document.getElementById("sum-response");

const callSumService = async (a:number, b:number) => {
	const request = new SumRequest();
	request
		.setNum1(a)
		.setNum2(b);

	const client = new DemoServiceClient("http://localhost:3000/api");
	const response = await client.sum(request, {'some-header': 'probably'});
	

	if (sumResult) {
		sumResult.innerHTML = "gRPC response: " + response.getSum();
	}
}

if (sumForm) {
	sumForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const numbers = [...sumForm.elements].filter(e => e.value).map(e => parseInt(e.value));
		const [a, b] = numbers;
		callSumService(a, b);
	});
}


