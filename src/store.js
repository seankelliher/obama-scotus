import { reactive } from "vue";

export const store = reactive({
    display: 0,
    changeDisplay(s) {
        store.display = s;
    }
});