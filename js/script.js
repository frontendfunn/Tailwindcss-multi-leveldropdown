$(document).ready(function () {
  $(".dropdown").each(function (_, dropdown) {
    const dropdownMenu = $(dropdown).find("> .dropdown-menu")[0];
    let popperInstance = null;

    function create() {
      popperInstance = Popper.createPopper(dropdown, dropdownMenu, {
        placement: "auto-start",
        strategy: "absolute",
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: ["top", "bottom", "left", "right"],
            },
          },
        ],
      });
    }
    function destroy() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }

    function show() {
      $(dropdownMenu).attr("data-show", "");
      create();
    }

    function hide() {
      $(dropdownMenu).removeAttr("data-show");
      destroy();
    }

    $(dropdown).on("mouseenter focus", show);
    $(dropdown).on("mouseleave blur", hide);
  });
});
