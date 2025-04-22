import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomButton extends Component {
  render() {
    const { text, onPress, buttonStyle, textStyle, width, disabled } = this.props;

    // Преобразуем `disabled` в булево значение для внутренней логики
    const isDisabled = disabled === true || disabled === 'true';

    return (
      <TouchableOpacity
        style={[
          styles.button,
          buttonStyle,
          { 
            width: width, 
            backgroundColor: isDisabled ? '#e0e0e0' : '#303656', // Цвет фона для отключенной кнопки
            opacity: isDisabled ? 0.6 : 1, // Прозрачность для визуального эффекта
          },
        ]}
        onPress={() => {
          if (!isDisabled) {
            onPress();
          }
        }}
        disabled={isDisabled} // Нативное отключение кнопки
      >
        <Text style={[styles.text, textStyle, isDisabled && styles.disabledText]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

// Обновляем propTypes: теперь `disabled` может быть строкой или булевым значением
CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  width: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), // Поддержка обоих типов
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 60,
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 8,
  },
  disabledText: {
    color: '#a0a0a0', // Цвет текста для отключенной кнопки
  },
});