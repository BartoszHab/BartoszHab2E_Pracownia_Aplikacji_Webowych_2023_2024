<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prosty Kalkulator</title>
</head>
<body>

    <h1>Prosty Kalkulator</h1>


    <label>Podaj pierwszą liczbę:</label>
    <input type="number" id="liczba1"><br><br>

    <label>Podaj drugą liczbę:</label>
    <input type="number" id="liczba2"><br><br>


    <button onclick="oblicz()">Oblicz</button>


    <h2>Wyniki:</h2>
    <p id="wynik"></p>

    <script>

        function oblicz() {

            var liczba1 = parseFloat(document.getElementById("liczba1").value);
            var liczba2 = parseFloat(document.getElementById("liczba2").value);


            if (isNaN(liczba1) || isNaN(liczba2)) {
                document.getElementById("wynik").textContent = "Wprowadź poprawne liczby!";
                return;
            }


            var suma = liczba1 + liczba2;
            var roznica = liczba1 - liczba2;
            var iloczyn = liczba1 * liczba2;
            var iloraz = liczba2 !== 0 ? liczba1 / liczba2 : "Nie można dzielić przez zero";


            document.getElementById("wynik").textContent =
                "Dodawanie: " + suma + "\n" +
                "Odejmowanie: " + roznica + "\n" +
                "Mnożenie: " + iloczyn + "\n" +
                "Dzielenie: " + iloraz;
        }
    </script>

</body>
</html>
