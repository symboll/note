# dart

### basic type
```dart
void main(List<String> args) {
  List l1 = [[1,2], [3,4]];
  List l2 = l1.expand((element) => element).toList();
  print(l2);

  List l3 = <int>[1,2,3,4];
  int result = l3.fold<int>(1, (p,  element) => p * (element as int));

  print(result);
} 
```
