export default {
    template:`
        <div class="flex gap-2">
                <button 
                        @click="$emit('update:currentTag',tag)"
                        v-for="tag in allTags" 
                        class="border rouded px-1 py-px text-xs"
                        @click="currentTag = tag"
                        :class="{
                            'barder-blue-500 text-blue-500' : tag === currentTag}"
                >{{ tag }}</button>
        </div>
    `,

    props: {
        tags: Array,
        currentTag: String //modelValue is the default prop name for model so we can simply put in AssignementList v-model="currentTag" instead of v-lodel:currentTag="currentTag"
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        allTags() {
            return ['all' , ...new Set(this.tags)];
        }
    }
}