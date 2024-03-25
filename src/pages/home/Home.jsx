import { useSelector } from "react-redux"
import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import HomeCSS from "./home.module.css"
import WidgetSm from "../../components/widgetsm/WidgetSm"
import WidgetLg from "../../components/widgetlg/WidgetLg"


const Home = () => {
    const userChart = useSelector((state) => state.charts.userChart)

    return (
        <>
            <FeaturedInfo />
            <Chart title="User Analytics" data={userChart} grid />
            <div className={HomeCSS.homeWidgets}>
                <WidgetSm />
                <WidgetLg />
            </div>
        </>
    )
}

export default Home