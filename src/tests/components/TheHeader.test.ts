import { render } from "@testing-library/vue";
import TheHeader from "@/components/TheHeader.vue";

test("renders header with logo and heading", async () => {
  const msg = "Some text";
  const { getByText, getByTestId } = render(TheHeader, {
    props: {
      msg,
    },
  });

  getByTestId("logo");
  getByText(msg);
});
