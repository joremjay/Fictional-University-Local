wp.blocks.registerBlockType("ourblocktheme/programarchive", {
    title: "Fictional University Program Archive",
    edit: function() {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Program Archive placeholder")
    },
    save: function() {
        return null
    }
})