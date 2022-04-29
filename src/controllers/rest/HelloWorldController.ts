import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";
import {UseAuth} from "@tsed/platform-middlewares";
import {AuthMiddleware} from "../../middlewares/auth.middleware";

@Controller("/hello-world")
@UseAuth(AuthMiddleware)
export class HelloWorldController {
    @Get("/")
    get() {
        return "hello";
    }
}
