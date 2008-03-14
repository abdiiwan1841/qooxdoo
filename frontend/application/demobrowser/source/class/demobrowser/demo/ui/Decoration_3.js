/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("demobrowser.demo.ui.Decoration_3",
{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);

      qx.Theme.patch(qx.theme.classic.Appearance, demobrowser.demo.ui.Decoration_3_Appearance);
      qx.theme.manager.Meta.getInstance().setTheme(null);
      qx.theme.manager.Meta.getInstance().setTheme(qx.theme.Classic);

      var base = qx.core.Setting.get("qx.resourceUri") + "/qx/decoration/Contemporary/";
      this.importImageData(base);

      var containerLayout = new qx.ui.layout.HBox();
      containerLayout.setSpacing(10);

      var container = new qx.ui.core.Widget();
      container.setPadding(20);
      container.setLayout(containerLayout);
      this.getRoot().add(container, 0, 0);


      // Examples
      var deco1 = new qx.ui.decoration.Grid(base + "Button-Normal-Fokus.png");

      var widget1 = new qx.ui.form.Button("OK");
      widget1.setWidth(100);
      //widget1.setHeight(20);
      //widget1.setDecorator(deco1);
      widget1.setAppearance("new-button");
      containerLayout.add(widget1);

/*
      var widget1 = new qx.ui.core.Widget();
      widget1.setWidth(100);
      widget1.setHeight(20);
      widget1.setDecorator(new qx.ui.decoration.Grid(base + "Button-Normal.png"));
      containerLayout.add(widget1);

      var widget1 = new qx.ui.core.Widget();
      widget1.setWidth(100);
      widget1.setHeight(20);
      widget1.setDecorator(new qx.ui.decoration.Grid(base + "Button-Pressed.png"));
      containerLayout.add(widget1);

      var widget1 = new qx.ui.core.Widget();
      widget1.setWidth(100);
      widget1.setHeight(20);
      widget1.setDecorator(new qx.ui.decoration.Grid(base + "Button-Checked.png"));
      containerLayout.add(widget1);

      var widget1 = new qx.ui.core.Widget();
      widget1.setWidth(100);
      widget1.setHeight(20);
      widget1.setDecorator(new qx.ui.decoration.Grid(base + "Button-Normal-Fokus.png"));
      containerLayout.add(widget1);

      var widget1 = new qx.ui.core.Widget();
      widget1.setWidth(100);
      widget1.setHeight(20);
      widget1.setDecorator(new qx.ui.decoration.Grid(base + "Button-Default.png"));
      containerLayout.add(widget1);

      var widget1 = new qx.ui.core.Widget();
      widget1.setWidth(100);
      widget1.setHeight(20);
      widget1.setDecorator(new qx.ui.decoration.Grid(base + "Button-Hover.png"));
      containerLayout.add(widget1);


      var button1 = new qx.ui.form.Button("Juhu");
      button1.setDecorator(deco1);
      button1.setTextColor("white");
      button1.setAllowGrowY(false);
      containerLayout.add(button1);
*/
    },

    importImageData : function(base)
    {
      var imageData = {
        "button/Button-Checked-Fokus-tl.png": ["button/Button-Combined.png", 0, 0, 4, 4],
        "button/Button-Checked-Fokus-t.png": ["button/Button-Combined.png", 0, -4, 4, 4],
        "button/Button-Checked-Fokus-tr.png": ["button/Button-Combined.png", 0, -8, 4, 4],
        "button/Button-Checked-Fokus-bl.png": ["button/Button-Combined.png", 0, -12, 4, 4],
        "button/Button-Checked-Fokus-b.png": ["button/Button-Combined.png", 0, -16, 4, 4],
        "button/Button-Checked-Fokus-br.png": ["button/Button-Combined.png", 0, -20, 4, 4],
        "button/Button-Checked-tl.png": ["button/Button-Combined.png", 0, -24, 4, 4],
        "button/Button-Checked-t.png": ["button/Button-Combined.png", 0, -28, 4, 4],
        "button/Button-Checked-tr.png": ["button/Button-Combined.png", 0, -32, 4, 4],
        "button/Button-Checked-bl.png": ["button/Button-Combined.png", 0, -36, 4, 4],
        "button/Button-Checked-b.png": ["button/Button-Combined.png", 0, -40, 4, 4],
        "button/Button-Checked-br.png": ["button/Button-Combined.png", 0, -44, 4, 4],
        "button/Button-Default-Fokus-tl.png": ["button/Button-Combined.png", 0, -48, 4, 4],
        "button/Button-Default-Fokus-t.png": ["button/Button-Combined.png", 0, -52, 4, 4],
        "button/Button-Default-Fokus-tr.png": ["button/Button-Combined.png", 0, -56, 4, 4],
        "button/Button-Default-Fokus-bl.png": ["button/Button-Combined.png", 0, -60, 4, 4],
        "button/Button-Default-Fokus-b.png": ["button/Button-Combined.png", 0, -64, 4, 4],
        "button/Button-Default-Fokus-br.png": ["button/Button-Combined.png", 0, -68, 4, 4],
        "button/Button-Default-tl.png": ["button/Button-Combined.png", 0, -72, 4, 4],
        "button/Button-Default-t.png": ["button/Button-Combined.png", 0, -76, 4, 4],
        "button/Button-Default-tr.png": ["button/Button-Combined.png", 0, -80, 4, 4],
        "button/Button-Default-bl.png": ["button/Button-Combined.png", 0, -84, 4, 4],
        "button/Button-Default-b.png": ["button/Button-Combined.png", 0, -88, 4, 4],
        "button/Button-Default-br.png": ["button/Button-Combined.png", 0, -92, 4, 4],
        "button/Button-Hover-tl.png": ["button/Button-Combined.png", 0, -96, 4, 4],
        "button/Button-Hover-t.png": ["button/Button-Combined.png", 0, -100, 4, 4],
        "button/Button-Hover-tr.png": ["button/Button-Combined.png", 0, -104, 4, 4],
        "button/Button-Hover-bl.png": ["button/Button-Combined.png", 0, -108, 4, 4],
        "button/Button-Hover-b.png": ["button/Button-Combined.png", 0, -112, 4, 4],
        "button/Button-Hover-br.png": ["button/Button-Combined.png", 0, -116, 4, 4],
        "button/Button-Normal-Fokus-tl.png": ["button/Button-Combined.png", 0, -120, 4, 4],
        "button/Button-Normal-Fokus-t.png": ["button/Button-Combined.png", 0, -124, 4, 4],
        "button/Button-Normal-Fokus-tr.png": ["button/Button-Combined.png", 0, -128, 4, 4],
        "button/Button-Normal-Fokus-bl.png": ["button/Button-Combined.png", 0, -132, 4, 4],
        "button/Button-Normal-Fokus-b.png": ["button/Button-Combined.png", 0, -136, 4, 4],
        "button/Button-Normal-Fokus-br.png": ["button/Button-Combined.png", 0, -140, 4, 4],
        "button/Button-Normal-tl.png": ["button/Button-Combined.png", 0, -144, 4, 4],
        "button/Button-Normal-t.png": ["button/Button-Combined.png", 0, -148, 4, 4],
        "button/Button-Normal-tr.png": ["button/Button-Combined.png", 0, -152, 4, 4],
        "button/Button-Normal-bl.png": ["button/Button-Combined.png", 0, -156, 4, 4],
        "button/Button-Normal-b.png": ["button/Button-Combined.png", 0, -160, 4, 4],
        "button/Button-Normal-br.png": ["button/Button-Combined.png", 0, -164, 4, 4],
        "button/Button-Pressed-tl.png": ["button/Button-Combined.png", 0, -168, 4, 4],
        "button/Button-Pressed-t.png": ["button/Button-Combined.png", 0, -172, 4, 4],
        "button/Button-Pressed-tr.png": ["button/Button-Combined.png", 0, -176, 4, 4],
        "button/Button-Pressed-bl.png": ["button/Button-Combined.png", 0, -180, 4, 4],
        "button/Button-Pressed-b.png": ["button/Button-Combined.png", 0, -184, 4, 4],
        "button/Button-Pressed-br.png": ["button/Button-Combined.png", 0, -188, 4, 4],
        "button/Button-Combined.png": ["button/Button-Combined.png", 0, 0, 4, 192],
        "button/Button-Checked-Fokus-l.png": ["button/Button-Combined-Center.png", 0, 0, 4, 52],
        "button/Button-Checked-Fokus-r.png": ["button/Button-Combined-Center.png", -4, 0, 4, 52],
        "button/Button-Checked-l.png": ["button/Button-Combined-Center.png", -8, 0, 4, 52],
        "button/Button-Checked-r.png": ["button/Button-Combined-Center.png", -12, 0, 4, 52],
        "button/Button-Default-Fokus-l.png": ["button/Button-Combined-Center.png", -16, 0, 4, 52],
        "button/Button-Default-Fokus-r.png": ["button/Button-Combined-Center.png", -20, 0, 4, 52],
        "button/Button-Default-l.png": ["button/Button-Combined-Center.png", -24, 0, 4, 52],
        "button/Button-Default-r.png": ["button/Button-Combined-Center.png", -28, 0, 4, 52],
        "button/Button-Hover-l.png": ["button/Button-Combined-Center.png", -32, 0, 4, 52],
        "button/Button-Hover-r.png": ["button/Button-Combined-Center.png", -36, 0, 4, 52],
        "button/Button-Normal-Fokus-l.png": ["button/Button-Combined-Center.png", -40, 0, 4, 52],
        "button/Button-Normal-Fokus-r.png": ["button/Button-Combined-Center.png", -44, 0, 4, 52],
        "button/Button-Normal-l.png": ["button/Button-Combined-Center.png", -48, 0, 4, 52],
        "button/Button-Normal-r.png": ["button/Button-Combined-Center.png", -52, 0, 4, 52],
        "button/Button-Pressed-l.png": ["button/Button-Combined-Center.png", -56, 0, 4, 52],
        "button/Button-Pressed-r.png": ["button/Button-Combined-Center.png", -60, 0, 4, 52],
        "button/Button-Combined-Center.png": ["button/Button-Combined-Center.png", 0, 0, 64, 52],
        "button/Button-Checked-Fokus-c.png": ["button/Button-Checked-Fokus-c.png", 0, 0, 40, 52],
        "button/Button-Checked-c.png": ["button/Button-Checked-c.png", 0, 0, 40, 52],
        "button/Button-Default-Fokus-c.png": ["button/Button-Default-Fokus-c.png", 0, 0, 40, 52],
        "button/Button-Default-c.png": ["button/Button-Default-c.png", 0, 0, 40, 52],
        "button/Button-Hover-c.png": ["button/Button-Hover-c.png", 0, 0, 40, 52],
        "button/Button-Normal-Fokus-c.png": ["button/Button-Normal-Fokus-c.png", 0, 0, 40, 52],
        "button/Button-Normal-c.png": ["button/Button-Normal-c.png", 0, 0, 40, 52],
        "button/Button-Pressed-c.png": ["button/Button-Pressed-c.png", 0, 0, 40, 52]
      }

      var mgr = qx.util.ImageRegistry.getInstance();

      for (var image in imageData)
      {
        var data = imageData[image]
        mgr.register(base + image, base + data[0], data[1], data[2], data[3], data[4]);
      }
    }
  }
});

qx.Theme.define("demobrowser.demo.ui.Decoration_3_Appearance",
{
  title: "Shaded Buttons",

  appearances :
  {
    "new-button" :
    {
      style : function(states)
      {
        var base = qx.core.Setting.get("qx.resourceUri") + "/qx/decoration/Contemporary/";
        console.log(base + "button/Button-Combined-Center.png");

        var decorator;
        if (states.pressed) {
          decorator = new qx.ui.decoration.Grid(base + "button/Button-Pressed.png");
        } else if (states.over) {
          decorator = new qx.ui.decoration.Grid(base + "button/Button-Hover.png");
        } else {
          decorator = new qx.ui.decoration.Grid(base + "button/Button-Normal.png");
        }
        return {
          align: "top",
          backgroundColor: "blue",
          textColor: "black",
          decorator: decorator
        }
      }
    }
  }
});