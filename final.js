// ------------------clear function---------------------------------
let btnClear = document.getElementById('clearBtn');
let inputs = document.querySelectorAll('input');
let selects = document.querySelectorAll('Select');


btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '')
    selects.forEach(Select => Select.value = 'Select')

});


// -------------------store input value in variable -----------------


function returnText() {
var gearTeeth1 = document.getElementById("teethOnGear").value
var pinionTeeth1 = document.getElementById("teethOnPinion").value
var loads1 = document.getElementById("load").value
var speeds1 = document.getElementById("speed").value
var safetyFactor1 = document.getElementById("fos").value
var velocity = document.getElementById("piv").value
var materialSelection = document.getElementById("material").value
var gearMaterialSelection = document.getElementById("materialNormal").value
var pinionMaterialSelection = document.getElementById("pinionMaterial").value

// alert(gearTeeth)
console.log(gearTeeth);
console.log(typeof(gearTeeth));
console.log(pinionTeeth);
console.log(loads);
console.log(speeds);
console.log(safetyFactor);
console.log("velocity:", velocity);
console.log(typeof(velocity));
console.log(materialSelection);

var gearTeeth = Number(gearTeeth1);
var pinionTeeth = Number(pinionTeeth1);
var loads = Number(loads1);
var speeds = Number(speeds1);
var safetyFactor = Number(safetyFactor1);

var v = Number(velocity);
// var nO = document.getElementById("no");
// var yES = document.getElementById('materialSelection');


// switch(materialSelection){
//     case "Gray Cast Iron FG 200":
//         ultimateTensileStrength = 200;
//         break;
//     case "Gray Cast Iron FG 260":
//         ultimateTensileStrength = 260;
//         break;
//     case "Gray Cast Iron FG 350":
//         ultimateTensileStrength = 350;
//         break;
//     case "Gray Cast Iron FG 350(Heat Treated)":
//         ultimateTensileStrength = 350;
//         break;
//     case "Cast Steel Grade I":
//         ultimateTensileStrength = 550;
//         break;
//     case "Cast Steel Grade I(Annealed)":
//         ultimateTensileStrength = 630;
//         break;
//     case "Cast Steel Grade I(Hardened Tempered)":
//         ultimateTensileStrength = 800;
//         break;
//     case "High Tensile Steel CS 640":
//         ultimateTensileStrength = 640;
//         break;
//     case "High Tensile Steel CS 700":
//         ultimateTensileStrength = 700;
//         break;
//     case "High Tensile Steel CS 840":
//         ultimateTensileStrength = 840;
//         break;
//     case "High Tensile Steel CS 1030":
//         ultimateTensileStrength = 1030;
//         break;
//     case "High Tensile Steel CS 1230":
//         ultimateTensileStrength = 1230;
//         break;
//     case "Carbon Steel 30C8 (Normal)":
//         ultimateTensileStrength = 500;
//         break;
//     case "Carbon Steel 30C8 (Tempered & Hardened)":
//         ultimateTensileStrength = 600;
//         break;
//     case "Carbon Steel 40C8 (Normal)":
//         ultimateTensileStrength = 580;
//         break;
//     case "Carbon Steel 40C8 (Tempered & Hardened)":
//         ultimateTensileStrength = 600;
//         break;
//     case "Carbon Steel 55C8 (Normal)":
//         ultimateTensileStrength = 720;
//         break;
//     case "Carbon Steel 55C8 (Tempered & Hardened)":
//         ultimateTensileStrength = 700;
//         break;
//     default:
//         ultimateTensileStrength = 0;
// }

if(materialSelection){
    switch(materialSelection){
        case "Gray Cast Iron FG 200":
            ultimateTensileStrength = 200;
            break;
        case "Gray Cast Iron FG 260":
            ultimateTensileStrength = 260;
            break;
        case "Gray Cast Iron FG 350":
            ultimateTensileStrength = 350;
            break;
        case "Gray Cast Iron FG 350(Heat Treated)":
            ultimateTensileStrength = 350;
            break;
        case "Cast Steel Grade I":
            ultimateTensileStrength = 550;
            break;
        case "Cast Steel Grade I(Annealed)":
            ultimateTensileStrength = 630;
            break;
        case "Cast Steel Grade I(Hardened Tempered)":
            ultimateTensileStrength = 800;
            break;
        case "High Tensile Steel CS 640":
            ultimateTensileStrength = 640;
            break;
        case "High Tensile Steel CS 700":
            ultimateTensileStrength = 700;
            break;
        case "High Tensile Steel CS 840":
            ultimateTensileStrength = 840;
            break;
        case "High Tensile Steel CS 1030":
            ultimateTensileStrength = 1030;
            break;
        case "High Tensile Steel CS 1230":
            ultimateTensileStrength = 1230;
            break;
        case "Carbon Steel 30C8 (Normal)":
            ultimateTensileStrength = 500;
            break;
        case "Carbon Steel 30C8 (Tempered & Hardened)":
            ultimateTensileStrength = 600;
            break;
        case "Carbon Steel 40C8 (Normal)":
            ultimateTensileStrength = 580;
            break;
        case "Carbon Steel 40C8 (Tempered & Hardened)":
            ultimateTensileStrength = 600;
            break;
        case "Carbon Steel 55C8 (Normal)":
            ultimateTensileStrength = 720;
            break;
        case "Carbon Steel 55C8 (Tempered & Hardened)":
            ultimateTensileStrength = 700;
            break;
        default:
            ultimateTensileStrength = 0;
    }

        var bendingStress = ultimateTensileStrength / 3;
        console.log("bendingStress:", bendingStress);

        var yg = (0.484 - (2.87 / gearTeeth));
        // round up to 3 decimal for that we use toFixed
        yg.toFixed(3);
        var yp = (0.484 - (2.87 / pinionTeeth));
        yp.toFixed(3);

        var bendingForce = (bendingStress * 10 * yp);

        var km = 1.5;
        var ka = 1;

        // var v = Number(velocity);
        var ft = (loads / v);
        ft.toFixed(2);
        var kv = 6 / (6 + v);

        var feffective = (ka * km * ft) / kv
        feffective.toFixed(2);

        var module = Math.ceil(Math.sqrt((safetyFactor * feffective) / bendingForce))
        console.log("module1:", module);
}
else if (pinionMaterialSelection && gearMaterialSelection){
    switch(gearMaterialSelection){
        case "Gray Cast Iron FG 200":
            gearSut = 200;
            break;
        case "Gray Cast Iron FG 260":
            gearSut = 260;
            break;
        case "Gray Cast Iron FG 350":
            gearSut = 350;
            break;
        case "Gray Cast Iron FG 350(Heat Treated)":
            gearSut = 350;
            break;
        case "Cast Steel Grade I":
            gearSut = 550;
            break;
        case "Cast Steel Grade I(Annealed)":
            gearSut = 630;
            break;
        case "Cast Steel Grade I(Hardened Tempered)":
            gearSut = 800;
            break;
        case "High Tensile Steel CS 640":
            gearSut = 640;
            break;
        case "High Tensile Steel CS 700":
            gearSut = 700;
            break;
        case "High Tensile Steel CS 840":
            gearSut = 840;
            break;
        case "High Tensile Steel CS 1030":
            gearSut = 1030;
            break;
        case "High Tensile Steel CS 1230":
            gearSut = 1230;
            break;
        case "Carbon Steel 30C8 (Normal)":
            gearSut = 500;
            break;
        case "Carbon Steel 30C8 (Tempered & Hardened)":
            gearSut = 600;
            break;
        case "Carbon Steel 40C8 (Normal)":
            gearSut = 580;
            break;
        case "Carbon Steel 40C8 (Tempered & Hardened)":
            gearSut = 600;
            break;
        case "Carbon Steel 55C8 (Normal)":
            gearSut = 720;
            break;
        case "Carbon Steel 55C8 (Tempered & Hardened)":
            gearSut = 700;
            break;
        default:
            gearSut = 0;
    }
    var gearBendingStress = gearSut / 3;
    console.log("gearBendingStress: ", gearBendingStress);
    

    
    switch(pinionMaterialSelection){
        case "Gray Cast Iron FG 200":
            pinionSUT = 200;
            break;
        case "Gray Cast Iron FG 260":
            pinionSUT = 260;
            break;
        case "Gray Cast Iron FG 350":
            pinionSUT = 350;
            break;
        case "Gray Cast Iron FG 350(Heat Treated)":
            pinionSUT = 350;
            break;
        case "Cast Steel Grade I":
            pinionSUT = 550;
            break;
        case "Cast Steel Grade I(Annealed)":
            pinionSUT = 630;
            break;
        case "Cast Steel Grade I(Hardened Tempered)":
            pinionSUT = 800;
            break;
        case "High Tensile Steel CS 640":
            pinionSUT = 640;
            break;
        case "High Tensile Steel CS 700":
            pinionSUT = 700;
            break;
        case "High Tensile Steel CS 840":
            pinionSUT = 840;
            break;
        case "High Tensile Steel CS 1030":
            pinionSUT = 1030;
            break;
        case "High Tensile Steel CS 1230":
            pinionSUT = 1230;
            break;
        case "Carbon Steel 30C8 (Normal)":
            pinionSUT = 500;
            break;
        case "Carbon Steel 30C8 (Tempered & Hardened)":
            pinionSUT = 600;
            break;
        case "Carbon Steel 40C8 (Normal)":
            pinionSUT = 580;
            break;
        case "Carbon Steel 40C8 (Tempered & Hardened)":
            pinionSUT = 600;
            break;
        case "Carbon Steel 55C8 (Normal)":
            pinionSUT = 720;
            break;
        case "Carbon Steel 55C8 (Tempered & Hardened)":
            pinionSUT = 700;
            break;
        default:
            pinionSUT = 0;
    }
    var pinionBendingStress = pinionSUT / 3;
    console.log("pinionBendingStress: ", pinionBendingStress);
    
        if ((gearBendingStress * yg) < (pinionBendingStress * yp)) {
            // document.getElementById("output").innerHTML = gearSut;
            switch(gearMaterialSelection){
                case "Gray Cast Iron FG 200":
                    gearSut = 200;
                    break;
                case "Gray Cast Iron FG 260":
                    gearSut = 260;
                    break;
                case "Gray Cast Iron FG 350":
                    gearSut = 350;
                    break;
                case "Gray Cast Iron FG 350(Heat Treated)":
                    gearSut = 350;
                    break;
                case "Cast Steel Grade I":
                    gearSut = 550;
                    break;
                case "Cast Steel Grade I(Annealed)":
                    gearSut = 630;
                    break;
                case "Cast Steel Grade I(Hardened Tempered)":
                    gearSut = 800;
                    break;
                case "High Tensile Steel CS 640":
                    gearSut = 640;
                    break;
                case "High Tensile Steel CS 700":
                    gearSut = 700;
                    break;
                case "High Tensile Steel CS 840":
                    gearSut = 840;
                    break;
                case "High Tensile Steel CS 1030":
                    gearSut = 1030;
                    break;
                case "High Tensile Steel CS 1230":
                    gearSut = 1230;
                    break;
                case "Carbon Steel 30C8 (Normal)":
                    gearSut = 500;
                    break;
                case "Carbon Steel 30C8 (Tempered & Hardened)":
                    gearSut = 600;
                    break;
                case "Carbon Steel 40C8 (Normal)":
                    gearSut = 580;
                    break;
                case "Carbon Steel 40C8 (Tempered & Hardened)":
                    gearSut = 600;
                    break;
                case "Carbon Steel 55C8 (Normal)":
                    gearSut = 720;
                    break;
                case "Carbon Steel 55C8 (Tempered & Hardened)":
                    gearSut = 700;
                    break;
                default:
                    gearSUT = 0;
            }

                // var bendingStress = ultimateTensileStrength / 3;
                console.log("gearBendingStress:", gearBendingStress);

                var yg = (0.484 - (2.87 / gearTeeth));
                // round up to 3 decimal for that we use toFixed
                yg.toFixed(3);
                var yp = (0.484 - (2.87 / pinionTeeth));
                yp.toFixed(3);

                var gearBendingForce = (gearBendingStress * 10 * yg);

                var km = 1.5;
                var ka = 1;

                
                var ft = (loads / v);
                ft.toFixed(2);
                var kv = 6 / (6 + v);

                var feffective = (ka * km * ft) / kv
                feffective.toFixed(2);

                var module = Math.ceil(Math.sqrt((safetyFactor * feffective) / gearBendingForce))
                console.log("module2:", module);

        } else {

                // var pinionBendingStress = pinionSUT / 3;
                console.log("bendingStress:", pinionBendingStress);

                var yg = (0.484 - (2.87 / gearTeeth));
                // round up to 3 decimal for that we use toFixed
                yg.toFixed(3);
                var yp = (0.484 - (2.87 / pinionTeeth));
                yp.toFixed(3);

                var pinionBendingForce = (pinionBendingStress * 10 * yp);
                console.log("pinionBendingForce: ", pinionBendingForce)

                var km = 1.5;
                var ka = 1;

                // var v = Number(velocity);
                var ft = (loads / v);
                ft.toFixed(2);
                var kv = 6 / (6 + v);

                var feffective = (ka * km * ft) / kv
                
                feffective.toFixed(2);
                
                var module = Math.ceil(Math.sqrt((safetyFactor * feffective) / pinionBendingForce))
                console.log("module3:", module);
                }
}
else{
    console.log('nooooo')
}

// var gearBendingStress = gearSUT / 3;
// var pinionBendingStress = pinionSUT / 3;


// var bendingStress = ultimateTensileStrength / 3;
// console.log("bendingStress:", bendingStress);

// var yg = (0.484 - (2.87 / gearTeeth));
// // round up to 3 decimal for that we use toFixed
// yg.toFixed(3);
// var yp = (0.484 - (2.87 / pinionTeeth));
// yp.toFixed(3);

// var bendingForce = (bendingStress * 10 * yp);

// var km = 1.5;
// var ka = 1;

// var v = Number(velocity);
// var ft = (loads / v);
// ft.toFixed(2);
// var kv = 6 / (6 + v);

// var feffective = (ka * km * ft) / kv
// feffective.toFixed(2);

console.log("v: ", v);
console.log(typeof(v));
console.log("yg:", yg);
console.log("yp:", yp);
console.log("bendingForce:", bendingForce);
console.log("pinionBendingForce:", gearBendingForce);
console.log("gearBendingForce:", gearBendingForce);
console.log("km:", km);
console.log("ka:", ka);
console.log("ft:", ft);
console.log("kv:", kv);
console.log("feffective:", feffective);

// var module = Math.ceil(Math.sqrt((safetyFactor * feffective) / bendingForce))
// console.log("module:", module);

var addendum = module;
var dedendum = 1.25 * module;
var clearance = 0.25 * module;
var toothThickness = 1.5708 * module;
var workingDepth = 2 * module;
var pitchCircleDiameter = module * pinionTeeth;
var circularPitch = (Math.PI * pitchCircleDiameter) / pinionTeeth;
circularPitch.toFixed(2);
var diametralPitch = pitchCircleDiameter / pinionTeeth;


console.log("addendum:", addendum);
console.log("dedendum:", dedendum);
console.log("clearance:", clearance);
console.log("toothThickness:", toothThickness);
console.log("workingDepth:", workingDepth);
console.log("pitchCircleDiameter:", pitchCircleDiameter);
console.log("circularPitch:", circularPitch);
console.log("diametralPitch:", diametralPitch);

// console.log("========================================================")
// var addendumOutput = document.getElementById('addendum');
// console.log(addendumOutput);
// console.log("========================================================")
// addendumOutput = addendum;


// =====================Output Table ==============================================================

document.getElementById("module").innerHTML = module;
document.getElementById("addendum").innerHTML = addendum;
document.getElementById("dedendum").innerHTML = dedendum;
document.getElementById("clearance").innerHTML = clearance;
document.getElementById("toothThickness").innerHTML = toothThickness;
document.getElementById("workingDepth").innerHTML = workingDepth;
document.getElementById("pitchCircleDiameter").innerHTML = pitchCircleDiameter;
document.getElementById("circularPitch").innerHTML = circularPitch;
document.getElementById("diametralPitch").innerHTML = diametralPitch;


}

// =================== show and hide the yes no radio ====================================

function showTableSelectYes(){
    document.getElementById("materiall").style.visibility = "visible";
    document.getElementById('materialNormall').style.visibility = "hidden";
    document.getElementById("pinionMateriall").style.visibility = "hidden";
}
function showTableSelectNo(){
    document.getElementById("pinionMateriall").style.visibility = "visible";
    document.getElementById("materialNormall").style.visibility = "visible";
    document.getElementById('materiall').style.visibility = "hidden";
}
function hideTable(){
    document.getElementById("materialNormall").style.visibility = "hidden";
    // document.getElementById("materialNormal").style.display = "none";
    // document.getElementById("materialnormal").style.display = "none";
    // document.getElementById("materiall").style.display = "none";
    // document.getElementById("pinionMateriall").style.display = "none";

    document.getElementById("materiall").style.visibility = "hidden";
    document.getElementById("pinionMateriall").style.visibility = "hidden";
    
}

// ==================== show and hide the table ==========================================

function spur(){
    document.getElementById('spurTable').style.visibility = "visible";
    document.getElementById('spurOutputTable').style.visibility = "visible";
    document.getElementById("helicalTable").style.visibility = "hidden";
    document.getElementById('submitbtn').style.visibility = "hidden";
    document.getElementById('clearbtn').style.visibility = "hidden";
    document.getElementById('submitBtn').style.visibility = "visible";
    document.getElementById('clearBtn').style.visibility = "visible";
    // document.getElementById("bevelTable").style.visibility = "hidden";
}
function helical(){
    document.getElementById("helicalTable").style.visibility = "visible";
    document.getElementById('spurTable').style.visibility = "hidden";
    // document.getElementById('bevelTable').style.visibility = "hidden";
    document.getElementById('spurOutputTable').style.visibility = "hidden";
    document.getElementById('submitBtn').style.visibility = "hidden";
    document.getElementById('clearBtn').style.visibility = "hidden";
    document.getElementById('submitbtn').style.visibility = "visible";
    document.getElementById('clearbtn').style.visibility = "visible";
    hideTable();
}
// function bevel(){
//     document.getElementById('bevelTable').style.visibility = "visible";
//     document.getElementById("helicalTable").style.visibility = "hidden";
//     document.getElementById('spurTable').style.visibility = "hidden";
// }
function spurShowHideTable(){
    document.getElementById("spurTable").style.visibility = "visible";
    document.getElementById("helicalTable").style.visibility = "hidden";
    document.getElementById('submitbtn').style.visibility = "hidden";
    document.getElementById('clearbtn').style.visibility = "hidden";
    // document.getElementById("bevelTable").style.visibility = "hidden";
}




// const gearTeethValue = gearTeeth;
// localStorage.setItem('gearTeethValue', gearTeethValue)

// window.onload = function() {
//     const inputField = document.getElementById('input-field');
//     const savedValue = localStorage.getItem('inputValue');
//     if (savedValue) {
//     inputField.value = savedValue;
//     }
// }