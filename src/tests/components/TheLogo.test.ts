import { render } from "@testing-library/vue";
import TheLogo from "@/components/TheLogo.vue";

test("renders logo", async () => {
  const { getByTestId } = render(TheLogo);

  getByTestId("logo");
});
