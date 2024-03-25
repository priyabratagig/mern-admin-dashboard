import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import FeaturedInfoCSS from "./featuredInfo.module.css";

const FeaturedInfo = () => {
    return (
        <div className={FeaturedInfoCSS.featured}>
            <div className={FeaturedInfoCSS.featuredItem}>
                <span className={FeaturedInfoCSS.featuredTitle}>Revanue</span>
                <div className={FeaturedInfoCSS.featuredMoneyContainer}>
                    <span className={FeaturedInfoCSS.featuredMoney}>₹2,415</span>
                    <span className={FeaturedInfoCSS.featuredMoneyRate}>
                        -11.4 <ArrowDownward className={FeaturedInfoCSS.featuredIcon + " " + FeaturedInfoCSS.negative} />
                    </span>
                </div>
                <span className={FeaturedInfoCSS.featuredSub}>Compared to last month</span>
            </div>
            <div className={FeaturedInfoCSS.featuredItem}>
                <span className={FeaturedInfoCSS.featuredTitle}>Sales</span>
                <div className={FeaturedInfoCSS.featuredMoneyContainer}>
                    <span className={FeaturedInfoCSS.featuredMoney}>₹4,415</span>
                    <span className={FeaturedInfoCSS.featuredMoneyRate}>
                        -1.4 <ArrowDownward className={FeaturedInfoCSS.featuredIcon + " " + FeaturedInfoCSS.negative} />
                    </span>
                </div>
                <span className={FeaturedInfoCSS.featuredSub}>Compared to last month</span>
            </div>
            <div className={FeaturedInfoCSS.featuredItem}>
                <span className={FeaturedInfoCSS.featuredTitle}>Cost</span>
                <div className={FeaturedInfoCSS.featuredMoneyContainer}>
                    <span className={FeaturedInfoCSS.featuredMoney}>₹2,225</span>
                    <span className={FeaturedInfoCSS.featuredMoneyRate}>
                        +2.4 <ArrowUpward className={FeaturedInfoCSS.featuredIcon} />
                    </span>
                </div>
                <span className={FeaturedInfoCSS.featuredSub}>Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo