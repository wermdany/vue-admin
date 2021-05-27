import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "C",
  setup() {
    return () => {
      const { t } = useI18n();

      return <a href="/aa">{t("login.a")}</a>;
    };
  }
});
