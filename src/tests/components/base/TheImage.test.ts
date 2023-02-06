import { render } from "@testing-library/vue";
import TheImage from "@/components/base/TheImage.vue";

test("renders image with alt", async () => {
  const src = "./image.jpg";
  const alt = "Alt Text";
  const { getByAltText } = render(TheImage, {
    props: {
      src,
      alt,
    },
  });

  const img: HTMLImageElement = getByAltText(alt);
  expect(img.src).toContain(src);
});
