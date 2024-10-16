# Computer - 5/min

## BOM

### Raw Materials

| Material | Quantity / min |
| -------- | -------------- |
|          |                |

### Building and Power (not including extractors)

| Building | Quantity | Total Power (MW) |
| -------- | -------- | ---------------- |
|          |          |                  |

## Workflow

### A. Computer - 5/min

Manufacturer x 2

#### Inputs - Raw materials in **bold**.

| ID   | Part          | Quantity / min | Verified |
| ---- | ------------- | -------------- | -------- |
| 1    | Circuit Board | 20             | x        |
| 2    | Cable         | 40             | x        |
| 3    | Plastic       | 80             | x        |

#### Outputs

| ID   | Part     | Quantity/min | Destination ID |
| ---- | -------- | ------------ | -------------- |
| 1    | Computer | 5            | **FINAL**      |

### B. Circuit Board - 22.5/min

Assembler x 3

#### Inputs - Raw materials in **bold**.

| ID   | Part         | Quantity / min | Verified |
| ---- | ------------ | -------------- | -------- |
| 1    | Copper Sheet | 30             | x        |
| 2    | Plastic      | 60             | x        |

#### Outputs

| ID   | Part          | Quantity/min | Destination ID |
| ---- | ------------- | ------------ | -------------- |
| 1    | Circuit Board | 22.5         |                |
|      |               | 20           | A1             |
|      |               | 2.5          | **REMAINDER**  |

### C. Steamed Copper Sheet - 45/min

Refinery x 2

#### Inputs - Raw materials in **bold**.

| ID   | Part         | Quantity / min | Verified |
| ---- | ------------ | -------------- | -------- |
| 1    | Copper Ingot | 45             | x        |
| 2    | **Water**    | 45/min         | x        |

#### Outputs

| ID   | Part         | Quantity/min | Destination ID |
| ---- | ------------ | ------------ | -------------- |
| 1    | Copper Sheet | 45           |                |
|      |              | 30           | B1             |

### D. Coated Cable - 67.5/min

Refinery x 1

#### Inputs - Raw materials in **bold**.

| ID   | Part              | Quantity / min | Verified |
| ---- | ----------------- | -------------- | -------- |
| 1    | Wire              | 37.5           | x        |
| 2    | Heavy Oil Residue | 15             |          |

#### Outputs

| ID   | Part  | Quantity/min | Destination ID |
| ---- | ----- | ------------ | -------------- |
| 1    | Cable | 67.5         |                |
|      |       | 40           | A2             |
|      |       | 27.5         | **REMAINDER**  |

### E. Wire - 60/min

Constructor x 1

#### Inputs - Raw materials in **bold**.

| ID   | Part         | Quantity / min | Verified |
| ---- | ------------ | -------------- | -------- |
| 1    | Copper Ingot | 30             | x        |

#### Outputs

| ID   | Part | Quantity/min | Destination ID |
| ---- | ---- | ------------ | -------------- |
| 1    | Wire | 60           | D1             |

### F. Copper Ingot - 90/min

Smelter x 3

#### Inputs - Raw materials in **bold**.

| ID   | Part           | Quantity / min | Verified |
| ---- | -------------- | -------------- | -------- |
| 1    | **Copper Ore** | 90             | x        |

#### Outputs

| ID   | Part         | Quantity/min | Destination ID |
| ---- | ------------ | ------------ | -------------- |
| 1    | Copper Ingot | 90           |                |
|      |              | 45           | C1             |
|      |              | 30           | E1             |
|      |              | 15           | **REMAINDER**  |

### G. Plastic - 140/min

Refinery x 7

#### Inputs - Raw materials in **bold**.

| ID   | Part          | Quantity / min | Verified |
| ---- | ------------- | -------------- | -------- |
| 1    | **Crude Oil** | 240            | x        |

#### Outputs

| ID   | Part              | Quantity/min | Destination ID |
| ---- | ----------------- | ------------ | -------------- |
| 1    | Plastic           | 140          |                |
|      |                   | 80           | A3             |
|      |                   | 60           | B2             |
| 2    | Heavy Oil Residue | 70           |                |
|      |                   | 15           | D2             |
|      |                   | 55           | **REMAINDER**  |

