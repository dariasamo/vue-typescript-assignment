import { render } from "@testing-library/vue";
import TheCard from "@/components/ui/TheCard.vue";

test("renders card content", async () => {
  const text = "Some text";
  const { getByText } = render(TheCard, {
    slots: {
      default: text,
    },
  });

  getByText(text);
});
