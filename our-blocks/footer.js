wp.blocks.registerBlockType("ourblocktheme/footer", {
    title: "Fiction University Footer",
    edit: function() {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Footer placeholder")
    },
    save: function() {
        return null
    }
})