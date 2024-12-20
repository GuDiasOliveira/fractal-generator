import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FractalSettings } from '../types/fractal';
import * as S from './FractalGenerator.styles';

const FractalGenerator: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<FractalSettings>({
    iterations: 6,
    angle: 60,
    scale: 0.7,
    color: '#00ff00',
    strokeWidth: 2,
  });

  const generateFractalPoints = (
    x: number,
    y: number,
    len: number,
    angle: number,
    depth: number
  ): string[] => {
    if (depth === 0) return [];

    const endX = x + len * Math.cos((angle * Math.PI) / 180);
    const endY = y + len * Math.sin((angle * Math.PI) / 180);

    const newLen = len * settings.scale;
    const leftAngle = angle - settings.angle;
    const rightAngle = angle + settings.angle;

    return [
      `M ${x} ${y} L ${endX} ${endY}`,
      ...generateFractalPoints(endX, endY, newLen, leftAngle, depth - 1),
      ...generateFractalPoints(endX, endY, newLen, rightAngle, depth - 1),
    ];
  };

  const handleSettingChange = (name: keyof FractalSettings, value: number | string): void => {
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const paths = generateFractalPoints(400, 500, 100, -90, settings.iterations);

  return (
    <S.Container>
      <S.Controls>
        <S.ControlGroup>
          <label>{t('controls.iterations')}:</label>
          <input
            type="range"
            min="1"
            max="12"
            value={settings.iterations}
            onChange={(e) => handleSettingChange('iterations', parseInt(e.target.value))}
          />
          <span>{settings.iterations}</span>
        </S.ControlGroup>

        <S.ControlGroup>
          <label>{t('controls.angle')}:</label>
          <input
            type="range"
            min="0"
            max="90"
            value={settings.angle}
            onChange={(e) => handleSettingChange('angle', parseInt(e.target.value))}
          />
          <span>{settings.angle}°</span>
        </S.ControlGroup>

        <S.ControlGroup>
          <label>{t('controls.scale')}:</label>
          <input
            type="range"
            min="0.1"
            max="0.9"
            step="0.1"
            value={settings.scale}
            onChange={(e) => handleSettingChange('scale', parseFloat(e.target.value))}
          />
          <span>{settings.scale}</span>
        </S.ControlGroup>

        <S.ControlGroup>
          <label>{t('controls.color')}:</label>
          <input
            type="color"
            value={settings.color}
            onChange={(e) => handleSettingChange('color', e.target.value)}
          />
        </S.ControlGroup>

        <S.ControlGroup>
          <label>{t('controls.strokeWidth')}:</label>
          <input
            type="range"
            min="1"
            max="5"
            value={settings.strokeWidth}
            onChange={(e) => handleSettingChange('strokeWidth', parseInt(e.target.value))}
          />
          <span>{settings.strokeWidth}</span>
        </S.ControlGroup>
      </S.Controls>

      <S.FractalContainer>
        <S.FractalSVG width="800" height="600">
          {paths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke={settings.color}
              strokeWidth={settings.strokeWidth}
              fill="none"
            />
          ))}
        </S.FractalSVG>
      </S.FractalContainer>
    </S.Container>
  );
};

export default FractalGenerator;
