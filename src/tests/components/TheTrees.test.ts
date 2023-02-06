import { render } from "@testing-library/vue";
import TheTrees from "@/components/TheTrees.vue";
import type { TheTreeInterface } from "@/components/TheTree.vue";

const trees: TheTreeInterface[] = [
  {
    name: "Baobab",
    species_name: "Adansonia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg",
  },
  {
    name: "Red Mangrove",
    species_name: "Rhizophora mangle",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg",
  },
];

test("loads trees", async () => {
  const { getByTestId } = render(TheTrees, {
    props: {
      isLoading: false,
      trees,
    },
  });

  const treesList = getByTestId("trees-list");
  expect(treesList.children.length).toBe(2);
});

test("shows loading", async () => {
  const { getByTestId } = render(TheTrees, {
    props: {
      isLoading: true,
      trees,
    },
  });

  getByTestId("loading");
});
