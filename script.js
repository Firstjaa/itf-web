function change() {
    const account = Number(document.getElementById("myinputnum-ac").value);
    const cash = Number(document.getElementById("myinputnum-cash").value);
    document.getElementById("history").value += 
        `Current account balance: ${account}, Current cash balance: ${cash}\n`;
}

function proceed() {
    const type = document.getElementById("operation").value;
    const num = Number(document.getElementById("num-operation").value);
    let account = Number(document.getElementById("myinputnum-ac").value);
    let cash = Number(document.getElementById("myinputnum-cash").value);
    if (type === "deposit") {
        account += num;
        cash -= num;
    } else if (type === "withdraw") {
        account -= num;
        cash += num;
    }

    if (num <= 0) {
        alert("เงินไม่เป้น0 ไม่ติดลบ");
        return;
    }
    if (type === "deposit" && cash < num) {
        alert("เงินสดไม่พอ");
        return;
    }
    if (type === "withdraw" && account < num) {
        alert("เงินในบัญชีไม่พอ");
        return;
    }

    document.getElementById("myinputnum-ac").value = account;
    document.getElementById("myinputnum-cash").value = cash;
    document.getElementById("history").value += 
        `Current account balance: ${account}, Current cash balance: ${cash}\n`;
}

function convert() {
    const input = Number(document.getElementById("myinput balance").value);
    const currency = document.getElementById("operationmoney").value;
    let output;
    let currency2;
    if (currency === "thb") {
        currency2 = "thb";
        output = input;
    } else if (currency === "usd") {
        currency2 = "thb";
        output = (input*32.4);
    }
    document.getElementById("history").value +=
        `change ${input} ${currency} to ${output} ${currency2} \n`;
}