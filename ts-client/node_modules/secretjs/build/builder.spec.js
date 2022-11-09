"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
describe("builder", () => {
    describe("isValidBuilder", () => {
        // Valid cases
        it("returns true for simple examples", () => {
            expect(builder_1.isValidBuilder("myorg/super-optimizer:0.1.2")).toEqual(true);
            expect(builder_1.isValidBuilder("myorg/super-optimizer:42")).toEqual(true);
        });
        it("supports images with multi level names", () => {
            expect(builder_1.isValidBuilder("myorg/department-x/office-y/technology-z/super-optimizer:0.1.2")).toEqual(true);
        });
        it("returns true for tags with lower and upper chars", () => {
            expect(builder_1.isValidBuilder("myorg/super-optimizer:0.1.2-alpha")).toEqual(true);
            expect(builder_1.isValidBuilder("myorg/super-optimizer:0.1.2-Alpha")).toEqual(true);
        });
        // Invalid cases
        it("returns false for missing or empty tag", () => {
            expect(builder_1.isValidBuilder("myorg/super-optimizer")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/super-optimizer:")).toEqual(false);
        });
        it("returns false for name components starting or ending with a separator", () => {
            expect(builder_1.isValidBuilder(".myorg/super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("-myorg/super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("_myorg/super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg./super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg-/super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg_/super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/.super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/-super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/_super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/super-optimizer.:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/super-optimizer-:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/super-optimizer_:42")).toEqual(false);
        });
        it("returns false for upper case character in name component", () => {
            expect(builder_1.isValidBuilder("mYorg/super-optimizer:42")).toEqual(false);
            expect(builder_1.isValidBuilder("myorg/super-Optimizer:42")).toEqual(false);
        });
        it("returns false for long images", () => {
            expect(builder_1.isValidBuilder("myorgisnicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenicenice/super-optimizer:42")).toEqual(false);
        });
        it("returns false for images with no organization", () => {
            // Those are valid dockerhub images from https://hub.docker.com/_/ubuntu and https://hub.docker.com/_/rust
            // but not valid in the context of CosmWasm Verify
            expect(builder_1.isValidBuilder("ubuntu:xenial-20200212")).toEqual(false);
            expect(builder_1.isValidBuilder("rust:1.40.0")).toEqual(false);
        });
    });
});
//# sourceMappingURL=builder.spec.js.map