import Badge from "../components/Badge";
import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseDropdown from "../components/BaseDropdown";
import BaseHeader from "../components/BaseHeader";
import BaseInput from "../components/BaseInput";
import BaseNav from "../components/BaseNav";
import BasePagination from "../components/BasePagination";
import BaseProgress from "../components/BaseProgress";
import BaseSlider from "../components/BaseSlider";
import BaseSwitch from "../components/BaseSwitch";
import BaseRadio from "../components/BaseRadio";
import BaseTable from "../components/BaseTable";
import Card from "../components/Card";
import Modal from "../components/Modal";
import StatsCard from "../components/StatsCard";

import {
  ElTooltip
} from "element-plus";

const GlobalComponents = {
  install(app) {
    app.component("badge", Badge);
    app.component("base-alert", BaseAlert);
    app.component("base-button", BaseButton);
    app.component("base-checkbox", BaseCheckbox);
    app.component("base-dropdown", BaseDropdown);
    app.component("base-header", BaseHeader);
    app.component("base-input", BaseInput);
    app.component("base-nav", BaseNav);
    app.component("base-pagination", BasePagination);
    app.component("base-progress", BaseProgress);
    app.component("base-slider", BaseSlider);
    app.component("base-switch", BaseSwitch);
    app.component("base-radio", BaseRadio);
    app.component("base-table", BaseTable);
    app.component("card", Card);
    app.component("modal", Modal);
    app.component("stats-card", StatsCard);
    app.use(ElTooltip);
  }
};

export default GlobalComponents;
