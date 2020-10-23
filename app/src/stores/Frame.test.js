import { Frame } from "./Frame";

it("all rolls are null after create", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.roll1).toBe(null);
  expect(currentFrame.roll2).toBe(null);
  expect(currentFrame.roll3).toBe(null);
});
