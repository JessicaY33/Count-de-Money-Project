pAmount = 0;
nAmount = 0;
dAmount = 0;
qAmount = 0;
hAmount = 0;
dollAmount = 0;

//Total
function cal()
{
    tol = ((pAmount * 0.01) + (nAmount * 0.05) + (dAmount * 0.10) + (qAmount * 0.25) + (hAmount * 0.50) + (dollAmount * 1.00)).toFixed(2);
    total.innerHTML = "$" + tol;
}
function totalButton()
{
    const t = document.createElement("button");
    t.textContent = "total?";
    document.body.appendChild(t);
    t.addEventListener("click", cal);
}

//Penny
function pButtons()
{
    const s5 = document.createElement("button");
    s5.textContent = "-5";
    document.body.appendChild(s5);
    s5.addEventListener("click", pSub5);

    const s = document.createElement("button");
    s.textContent = "-";
    document.body.appendChild(s);
    s.addEventListener("click", pSub);

    const a = document.createElement("button");
    a.textContent = "+";
    document.body.appendChild(a);
    a.addEventListener("click", pAdd);

    const a5 = document.createElement("button");
    a5.textContent = "+5";
    document.body.appendChild(a5);
    a5.addEventListener("click", pAdd5);
}
function pSub5()
{
    if(pAmount > 4)
    {
        pAmount -= 5;
    }
    else
    {
        pAmount = 0;
    }
    pDisplay();
}
function pSub()
{
    if(pAmount > 0)
    {
        pAmount--;
    }
    pDisplay();
}
function pAdd()
{
    pAmount++;
    pDisplay();
}
function pAdd5()
{
    pAmount += 5;
    pDisplay();
}
function pDisplay()
{
    Penny.innerHTML = pAmount;
    pValue.innerHTML = "$" + (pAmount * 0.01).toFixed(2);
}

//Nickle
function nButtons()
{
    const s5 = document.createElement("button");
    s5.textContent = "-5";
    document.body.appendChild(s5);
    s5.addEventListener("click", nSub5);

    const s = document.createElement("button");
    s.textContent = "-";
    document.body.appendChild(s);
    s.addEventListener("click", nSub);

    const a = document.createElement("button");
    a.textContent = "+";
    document.body.appendChild(a);
    a.addEventListener("click", nAdd);

    const a5 = document.createElement("button");
    a5.textContent = "+5";
    document.body.appendChild(a5);
    a5.addEventListener("click", nAdd5);
}
function nSub5()
{
    if(nAmount > 4)
    {
        nAmount -= 5;
    }
    else
    {
        nAmount = 0;
    }
    nDisplay();
}
function nSub()
{
    if(nAmount > 0)
    {
        nAmount--;
    }
    nDisplay();
}
function nAdd()
{
    nAmount++;
    nDisplay();
}
function nAdd5()
{
    nAmount += 5;
    nDisplay();
}
function nDisplay()
{
    Nickle.innerHTML = nAmount;
    nValue.innerHTML = "$" + (nAmount * 0.05).toFixed(2);
}

//Dime
function dButtons()
{
    const s5 = document.createElement("button");
    s5.textContent = "-5";
    document.body.appendChild(s5);
    s5.addEventListener("click", dSub5);
    
    const s = document.createElement("button");
    s.textContent = "-";
    document.body.appendChild(s);
    s.addEventListener("click", dSub);

    const a = document.createElement("button");
    a.textContent = "+";
    document.body.appendChild(a);
    a.addEventListener("click", dAdd);

    const a5 = document.createElement("button");
    a5.textContent = "+5";
    document.body.appendChild(a5);
    a5.addEventListener("click", dAdd5);
}
function dSub5()
{
    if(dAmount > 4)
    {
        dAmount -= 5;
    }
    else
    {
        dAmount = 0;
    }
    dDisplay();
}
function dSub()
{
    if(dAmount > 0)
    {
        dAmount--;
    }
    dDisplay();
}
function dAdd()
{
    dAmount++;
    dDisplay();
}
function dAdd5()
{
    dAmount += 5;
    dDisplay();
}
function dDisplay()
{
    Dime.innerHTML = dAmount;
    dValue.innerHTML = "$" + (dAmount * 0.10).toFixed(2);
}

//Quarter
function qButtons()
{
    const s5 = document.createElement("button");
    s5.textContent = "-5";
    document.body.appendChild(s5);
    s5.addEventListener("click", qSub5);
    
    const s = document.createElement("button");
    s.textContent = "-";
    document.body.appendChild(s);
    s.addEventListener("click", qSub);

    const a = document.createElement("button");
    a.textContent = "+";
    document.body.appendChild(a);
    a.addEventListener("click", qAdd);

    const a5 = document.createElement("button");
    a5.textContent = "+5";
    document.body.appendChild(a5);
    a5.addEventListener("click", qAdd5);
}
function qSub5()
{
    if(qAmount > 4)
    {
        qAmount -= 5;
    }
    else
    {
        qAmount = 0;
    }
    qDisplay();
}
function qSub()
{
    if(qAmount > 0)
    {
        qAmount--;
    }
    qDisplay();
}
function qAdd()
{
    qAmount++;
    qDisplay();
}
function qAdd5()
{
    qAmount += 5;
    qDisplay();
}
function qDisplay()
{
    Quarter.innerHTML = qAmount;
    qValue.innerHTML = "$" + (qAmount * 0.25).toFixed(2);
}

//Half Dollar
function hButtons()
{
    const s5 = document.createElement("button");
    s5.textContent = "-5";
    document.body.appendChild(s5);
    s5.addEventListener("click", hSub5);
    
    const s = document.createElement("button");
    s.textContent = "-";
    document.body.appendChild(s);
    s.addEventListener("click", hSub);

    const a = document.createElement("button");
    a.textContent = "+";
    document.body.appendChild(a);
    a.addEventListener("click", hAdd);

    const a5 = document.createElement("button");
    a5.textContent = "+5";
    document.body.appendChild(a5);
    a5.addEventListener("click", hAdd5);
}
function hSub5()
{
    if(hAmount > 4)
    {
        hAmount -= 5;
    }
    else
    {
        hAmount = 0;
    }
    hDisplay();
}
function hSub()
{
    if(hAmount > 0)
    {
        hAmount--;
    }
    hDisplay();
}
function hAdd()
{
    hAmount++;
    hDisplay();
}
function hAdd5()
{
    hAmount += 5;
    hDisplay();
}
function hDisplay()
{
    hDoll.innerHTML = hAmount;
    hValue.innerHTML = "$" + (hAmount * 0.50).toFixed(2);
}

//Dollar
function dollButtons()
{
    const s5 = document.createElement("button");
    s5.textContent = "-5";
    document.body.appendChild(s5);
    s5.addEventListener("click", dollSub5);
    
    const s = document.createElement("button");
    s.textContent = "-";
    document.body.appendChild(s);
    s.addEventListener("click", dollSub);

    const a = document.createElement("button");
    a.textContent = "+";
    document.body.appendChild(a);
    a.addEventListener("click", dollAdd);

    const a5 = document.createElement("button");
    a5.textContent = "+5";
    document.body.appendChild(a5);
    a5.addEventListener("click", dollAdd5);
}
function dollSub5()
{
    if(dollAmount > 4)
    {
        dollAmount -= 5;
    }
    else
    {
        dollAmount = 0;
    }
    dollDisplay();
}
function dollSub()
{
    if(dollAmount > 0)
    {
        dollAmount--;
    }
    dollDisplay();
}
function dollAdd()
{
    dollAmount++;
    dollDisplay();
}
function dollAdd5()
{
    dollAmount += 5;
    dollDisplay();
}
function dollDisplay()
{
    Dollar.innerHTML = dollAmount;
    dollValue.innerHTML = "$" + (dollAmount * 1.00).toFixed(2);
}