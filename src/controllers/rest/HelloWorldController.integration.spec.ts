import {PlatformTest} from "@tsed/common";
import SuperTest from "supertest";
import {HelloWorldController} from "./HelloWorldController";
import {Server} from "../../Server";
import {TestMongooseContext} from "@tsed/testing-mongoose";
import {AuthMiddleware} from "../../middlewares/auth.middleware";
import {HelloService} from "../../services/hello.service";

describe("HelloWorldController", () => {
    let request: SuperTest.SuperTest<SuperTest.Test>;
    let authMiddleware: AuthMiddleware;
    let helloService: HelloService;

    beforeAll(TestMongooseContext.bootstrap(Server));
    beforeAll(() => {
        request = SuperTest(PlatformTest.callback());
        authMiddleware = PlatformTest.get<AuthMiddleware>(AuthMiddleware);
        helloService = PlatformTest.get<HelloService>(HelloService);
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    afterAll(TestMongooseContext.reset);

    it("Mocking Middleware", async () => {
        jest.spyOn(authMiddleware, "use").mockReturnValue(Promise.resolve(true));
        const response = await request.get("/rest/hello-world").expect(200);
        expect(response.text).toEqual("hello");
    });
    it("Mocking service", async () => {
        jest.spyOn(helloService, "getHello").mockReturnValue(Promise.resolve(true));
        const response = await request.get("/rest/hello-world").expect(200);
        expect(response.text).toEqual("hello");
    });
});
