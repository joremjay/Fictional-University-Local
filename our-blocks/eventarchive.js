wp.blocks.registerBlockType("ourblocktheme/eventarchive", {
    title: "Fictional University Event Archive",
    edit: function() {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Event Archive placeholder")
    },
    save: function() {
        return null
    }
})