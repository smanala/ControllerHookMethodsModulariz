sap.ui.define([
	"masha/controller/BaseController"
], function(Controller) {
	'use strict';
	return Controller.extend("masha.controller.MyXML", {
		onInit: function() {
			console.log("Child Class Constructor");
			//a global variable @ class level which can be used by other methods
            this.oView = this.getView();
            alert(this.calculateSal(1000));
		},
		onBeforeRendering: function() {
			//if(checkings....)
			this.oView.byId("MyButton").setEnabled(false);
		},
		onAfterRendering: function() {
			$("#myView--myForm").hide().fadeIn(5000);
		},
		//oView : this.getView(),
		clickMe: function(params) {
			var oControl = this.oView.byId("MyButton");
			oControl.setVisible(false);
		},
		onShow: function() {
			var oEmpId = this.oView.byId("idEmpID");
			console.log("Employee ID is : ", oEmpId.getValue());

			var oEmpName = this.oView.byId("idEmpName");
			console.log("Employee Name is : ", oEmpName.getValue());

			var oSal = this.oView.byId("idEmpSal");
			console.log("Employee Salary is : ", oSal.getValue());
			console.log("Employee Currency is : ", this.oView.byId("idEmpCurr").getValue());
		}
	});
});