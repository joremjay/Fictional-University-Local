wp.blocks.registerBlockType("ourblocktheme/page", {
    title: "Fiction University Page",
    edit: function() {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Page Placeholder")
    },
    save: function() {
        return null
    }   
})