import { render } from "@testing-library/vue";
import SvgContainer from "@/components/base/SvgContainer.vue";

const svg =
  "<svg title='test svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><line x2='50' y2='50' /></svg>";

test("renders svg", async () => {
  const { getByTitle } = render(SvgContainer, {
    slots: {
      default: svg,
    },
  });

  getByTitle("test svg");
});

test("renders svg container with default width and color", async () => {
  const width = "w-full";
  const color = "text-black";
  const { container } = render(SvgContainer, {
    slots: {
      default: svg,
    },
  });

  expect(container.getElementsByClassName(width).length).toBe(1);
  expect(container.getElementsByClassName(color).length).toBe(1);
});

test("renders svg container with custom width and color", async () => {
  const width = "w-48";
  const color = "text-red-500";
  const { container } = render(SvgContainer, {
    slots: {
      default: svg,
    },
    props: {
      width,
      color,
    },
  });

  expect(container.getElementsByClassName(width).length).toBe(1);
  expect(container.getElementsByClassName(color).length).toBe(1);
});
