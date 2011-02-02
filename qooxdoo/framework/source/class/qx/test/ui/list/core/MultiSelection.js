/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

qx.Class.define("qx.test.ui.list.core.MultiSelection",
{
  extend : qx.test.ui.list.AbstractListTest,

  members :
  {
    setUp : function()
    {
      this.base(arguments);
      this._list.setSelectionMode("multi");
    },

    createModelData : function()
    {
      this._model = new qx.data.Array();

      for (var i = 0; i < 100; i++) {
        this._model.push("item " + (i + 1));
      }
    },

    testSelection : function()
    {
      var selection = this._list.getSelection();
      selection.push(this._model.getItem(1));
      selection.push(this._model.getItem(2));
      selection.push(this._model.getItem(3));
      this.flush();

      // check selection on list
      this.assertEquals(3, this._list.getSelection().getLength(), "On List");
      this.assertDataArrayEquals(selection, new qx.data.Array(
      [
        this._model.getItem(1),
        this._model.getItem(2),
        this._model.getItem(3)
      ]), "On List");

      // check selection on manager
      var selectionFromManager = this._list._manager.getSelection();
      for (var i = 0; i < selectionFromManager.length; i++) {
        selectionFromManager[i] = this._list._getDataFromRow(selectionFromManager[i]);
      }
      this.assertEquals(3, selectionFromManager.length, "On selection manager");
      this.assertDataArrayEquals(selection, new qx.data.Array(selectionFromManager), "On selection manager");
    },

    testSelectionByUserInteraction : function()
    {
      var selection = this._list.getSelection();
      this._list._manager.replaceSelection([2, 3, 4, 7, 8, 9]);
      this.flush();

      // check selection on manager
      var selectionFromManager = this._list._manager.getSelection();
      for (var i = 0; i < selectionFromManager.length; i++) {
        selectionFromManager[i] = this._list._getDataFromRow(selectionFromManager[i]);
      }
      this.assertEquals(6, selectionFromManager.length, "On selection manager");
      this.assertTrue(selection.equals(new qx.data.Array(selectionFromManager)), "On selection manager");

      // check selection on list
      this.assertEquals(6, selection.getLength(), "On List");
      this.assertDataArrayEquals(selection, new qx.data.Array(
      [
        this._model.getItem(2),
        this._model.getItem(3),
        this._model.getItem(4),
        this._model.getItem(7),
        this._model.getItem(8),
        this._model.getItem(9)
      ]), "On List");
    },

    testSelectionEventByUserInteraction : function()
    {
      var selection = this._list.getSelection();

      var self = this;
      this.assertEventFired(selection, "change",
        function()
        {
          self._list._manager.replaceSelection([2, 3, 4, 7, 8, 9]);
          self.flush();
        },
        function(e)
        {
          // check selection on manager
          var selectionFromManager = self._list._manager.getSelection();
          for (var i = 0; i < selectionFromManager.length; i++) {
            selectionFromManager[i] = self._list._getDataFromRow(selectionFromManager[i]);
          }
          self.assertEquals(6, selectionFromManager.length, "On selection manager");
          self.assertDataArrayEquals(selection, new qx.data.Array(selectionFromManager), "On selection manager");

          // check selection on list
          self.assertEquals(6, selection.getLength(), "On List");
          self.assertDataArrayEquals(selection, new qx.data.Array(
          [
            self._model.getItem(2),
            self._model.getItem(3),
            self._model.getItem(4),
            self._model.getItem(7),
            self._model.getItem(8),
            self._model.getItem(9)
          ]), "On List");
        }
      );
    },

    testSelectionWithSorter : function()
    {
      this._list.setDelegate({
        sorter : function(a, b) {
          return a < b ? 1 : a > b ? -1 : 0;
        }
      });

      this.testSelection();
    },
    
    testOneSelection : function()
    {
      var selection = this._list.getSelection();
      
      this.assertEquals(0, selection.getLength());
      
      this._list.setSelectionMode("one");
      
      this.assertEquals(1, selection.getLength());
      this.assertEquals(this._model.getItem(0), selection.getItem(0));
    },
    
    testOneSelectionByChangingyModel : function()
    {
      var selection = this._list.getSelection();
      
      this.assertEquals(0, selection.getLength());
      
      var oldModel = this._model.copy();
      this._model.removeAll();
      
      this._list.setSelectionMode("one");
      this.assertEquals(0, selection.getLength());
      
      this._model = oldModel;
      this._list.setModel(this._model);
      
      this.assertEquals(1, selection.getLength());
      this.assertEquals(this._model.getItem(0), selection.getItem(0));
    },
    
    testOneSelectionWithEmptyModel : function()
    {
      var selection = this._list.getSelection();
      var oldModel = this._model.copy();
      this._model.removeAll();
      this._list.setSelectionMode("one");
      
      this.assertEquals(0, selection.getLength());

      this._model.push(oldModel.getItem(2));
      
      this.assertEquals(1, selection.getLength());
      this.assertEquals(this._model.getItem(0), selection.getItem(0));
    }
  }
});
