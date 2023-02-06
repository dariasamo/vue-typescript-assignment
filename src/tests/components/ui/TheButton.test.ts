import { render } from "@testing-library/vue";
import TheButton from "@/components/ui/TheButton.vue";

test("renders button with text", async () => {
  const text = "Click me";
  const { getByRole, getByText } = render(TheButton, {
    props: {
      text,
    },
  });

  getByRole("button");
  getByText(text);
});
