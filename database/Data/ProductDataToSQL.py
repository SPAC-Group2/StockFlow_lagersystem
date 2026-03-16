import csv

input_csv = r"C:\Users\LineWienke\Documents\StockFlow_lagersystem\database\Data/ProductData.csv"
output_sql = r"C:\Users\LineWienke\Documents\StockFlow_lagersystem\database\Data/insertProductData.sql"
output_sql2 = r"C:\Users\LineWienke\Documents\StockFlow_lagersystem\database\Data/insertCategories.sql"
categoryList = []

with open(input_csv, newline='', encoding="utf-8") as csvfile, open(output_sql, "w", encoding="utf-8") as sqlfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        name= row["name"].replace("'", "''")
        description= row["description"].replace("'", "''")
        price = row["price"]
        category = row["category"].replace("'", "''")

        if category not in categoryList:
            categoryList.append(category)

        sql = f"INSERT INTO Products (name,description, price, category_id) VALUES ('{name}', '{description}', '{price}', '{categoryList.index(category)+1}');\n"
        sqlfile.write(sql)

with open(output_sql2, "w", encoding="utf-8") as sqlfile:
        for i in range(len(categoryList)):
            sql = f"INSERT INTO Categories (category_id, cateory) VALUES ('{i+1}', '{categoryList[i]}');\n"
            sqlfile.write(sql)

print("SQL file generated.")