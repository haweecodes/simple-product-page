import { getDictionary } from "@/app/getDictionary";
import Breadcrumb from "./breadcrumb";

const BreadcrumbWrapper = async ({ params, children}: {
    params: {
        lang: string
    },
    children: React.ReactNode
}) => {
    const lang = await getDictionary(params.lang);

    return <Breadcrumb params={lang}>{children}</Breadcrumb>
           
}

export default BreadcrumbWrapper;