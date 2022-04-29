import {Service} from "@tsed/di";
import {BadRequest} from "@tsed/exceptions";

@Service()
export class HelloService {
    async getHello(): Promise<boolean> {
        // Some cool logic here
        // Some timeout
        await new Promise(resolve => setTimeout(() => {
            resolve(true);
        }, 1000));
        throw new BadRequest("Unauthorized");
    }
}
