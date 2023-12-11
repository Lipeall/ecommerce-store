import getFirstBillboard from "@/actions/get-first-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getFirstBillboard();
    const MainBillboard =
        Array.isArray(billboard) && billboard.length > 0 ? billboard[0] : null;
    const products = await getProducts({ isFeatured: true });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                {billboard && <Billboard data={MainBillboard} />}
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    );
};

export default HomePage;
