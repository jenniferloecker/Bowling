import { Frame } from "./Frame";

it("all rolls are null after create", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.roll1).toBe(null);
  expect(currentFrame.roll2).toBe(null);
  expect(currentFrame.roll3).toBe(null);
});

it("can return if the frame is finished", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.frameIsFinished()).toBe(false);
  currentFrame.setRoll1(10);
  expect(currentFrame.frameIsFinished()).toBe(true);
  currentFrame.setRoll1(8);
  expect(currentFrame.frameIsFinished()).toBe(false);
  currentFrame.setRoll2(2);
  expect(currentFrame.frameIsFinished()).toBe(true);
});
