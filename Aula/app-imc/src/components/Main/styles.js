import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 25,
  },

  textoPrincipal: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  input: {
    height: 60,
    borderColor: "#3D3A3A",
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 25,
    paddingHorizontal: 12,
  },
  addButton: {
    backgroundColor: "#003376",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 16,
    height: 45,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    backgroundColor: "#033B86",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 15,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#033B86",
    height: 55,
  },
  textoresult: {
    color: "#003376",
    fontSize: 20,
    height: 40,
  },
  resultado: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    padding: 20,
    backgroundColor: "#3498db",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#033B86",
  },
});
