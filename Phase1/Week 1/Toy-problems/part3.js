function calculateTaxablePay(annualGrossPay) {
    // Define the logic to calculate taxable pay
    // Replace based on the specific requirements
    // subtract some fixed amount for deductions, allowances, etc.
    return annualGrossPay - 10000; // Placeholder value, replace with actual logic
}

function calculateNhifDeduction(grossPay, nhifDeductionTable) {
    // Implement the logic to calculate NHIF deduction based on the provided table
    // Replace based on the specific NHIF deduction rules
    // iterate through the table and find the applicable range
    for (const row of nhifDeductionTable) {
        const [lowerLimit, upperLimit] = row.grossPayRange;
        if (grossPay >= lowerLimit && grossPay <= upperLimit) {
            return row.deduction;
        }
    }
    return 0; // Default to 0 if no matching range is found
}

function calculateNssfTierIContribution(pensionablePay) {
    // calculate NSSF Tier I contribution
    // Replace  based on the specific NSSF contribution rules
    // multiply pensionablePay by the NSSF Tier I rate
    const nssfTierIRate = 0.06; // Placeholder value, replace with actual rate
    return pensionablePay * nssfTierIRate;
}

function calculateIncomeTax(annualTaxablePay) {
    // to calculate income tax
    // Replace based on the specific income tax rules
    // use the provided tax brackets and rates
    if (annualTaxablePay <= 288000) {
        return annualTaxablePay * 0.1;
    } else if (annualTaxablePay <= 388000) {
        return (24000 * 0.1) + ((annualTaxablePay - 24000) * 0.25);
    } else if (annualTaxablePay <= 6000000) {
        return (24000 * 0.1) + (8333 * 0.25) + ((annualTaxablePay - 388000) * 0.3);
    } else if (annualTaxablePay <= 9600000) {
        return (24000 * 0.1) + (8333 * 0.25) + (461666 * 0.3) + ((annualTaxablePay - 6000000) * 0.325);
    } else {
        return (24000 * 0.1) + (8333 * 0.25) + (461666 * 0.3) + (3000000 * 0.325) + ((annualTaxablePay - 9600000) * 0.35);
    }
}

function calculateSalary() {
    // Calculate the salary based on the provided data
    const basicSalary = 120000;
    const benefits = 20000;
    const nhifDeductionTable = [
        { grossPayRange: [0, 24000], deduction: 0 },
        { grossPayRange: [24000, 38800], deduction: 500 },
        { grossPayRange: [38800, 54400], deduction: 750 },
        { grossPayRange: [54400, 67000], deduction: 1000 },
        { grossPayRange: [67000, 77800], deduction: 1250 },
        { grossPayRange: [77800, 88600], deduction: 1500 },
        { grossPayRange: [88600, 100000], deduction: 1750 },
        { grossPayRange: [100000, Infinity], deduction: 2000 },
    ];
    const pensionablePay = 100000;
    const quarter = "FIRST";
    const nssfRate = 0.0475;

    // Calculate the salary components
    const annualGrossPay = basicSalary + benefits;
    const annualTaxablePay = calculateTaxablePay(annualGrossPay);
    const annualNhifContribution = calculateNhifDeduction(annualGrossPay, nhifDeductionTable);
    const annualNssfContribution = calculateNssfTierIContribution(pensionablePay) * 4; // For a quarterly contribution, we multiply by 4

    // Calculate the net salary
    const netSalary = annualGrossPay - annualNhifContribution - annualNssfContribution - calculateIncomeTax(annualTaxablePay);

    // Return the net salary
    return netSalary;
}

console.log(calculateSalary());
