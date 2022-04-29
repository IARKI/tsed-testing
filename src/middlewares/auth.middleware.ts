import {Middleware, MiddlewareMethods} from "@tsed/platform-middlewares";
import {Context} from "@tsed/platform-params";
import {Inject} from "@tsed/di";
import {HelloService} from "../services/hello.service";

@Middleware()
export class AuthMiddleware implements MiddlewareMethods {
    @Inject(HelloService)
    private helloService: HelloService;

    async use(@Context() ctx: Context): Promise<boolean> {
        await this.helloService.getHello(); // This will fail
        return true;
    }

}
