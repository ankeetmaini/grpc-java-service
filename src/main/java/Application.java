import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;

public class Application {
	public static void main(String[] args) throws IOException, InterruptedException {
		Server server = ServerBuilder.forPort(3000)
				.addService(new DemoServiceImpl())
				.build();

		server.start();

		// boring boilerplate here
		Runtime.getRuntime().addShutdownHook(new Thread(() -> {
			server.shutdown();
		}));
		server.awaitTermination();
	}
}
