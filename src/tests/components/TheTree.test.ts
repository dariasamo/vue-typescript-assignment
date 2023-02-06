import { render, fireEvent } from "@testing-library/vue";
import TheTree from "@/components/TheTree.vue";
import type { TheTreeInterface } from "@/components/TheTree.vue";

const tree: TheTreeInterface = {
  name: "Baobab",
  species_name: "Adansonia",
  image: "./image.jpg",
};

const treeButton = "tree-button";
const treeImage = "tree-image";
const showImageText = "Show Image";
const hideImageText = "Hide Image";
const imageAlt = "Baobab, Adansonia";

test("renders tree content", async () => {
  const { getByText } = render(TheTree, {
    props: {
      tree,
    },
  });

  getByText("Baobab");
  getByText("Adansonia");
  getByText(showImageText);
});

test("shows and hides image on click", async () => {
  const { getByTestId, getByText, getByAltText } = render(TheTree, {
    props: {
      tree,
    },
  });
  const button = getByTestId(treeButton);
  await fireEvent.click(button);
  getByTestId(treeImage);
  getByAltText(imageAlt);
  getByText(hideImageText);
  await fireEvent.click(button);
  getByText(showImageText);
});
