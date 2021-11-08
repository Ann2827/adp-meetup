## Темизация

-----

### Клиентский конфиг

<pre>
<code class="javascript" data-trim>
"theme": {
    "layout": "default",
    "styles": {
      "palette": {
        "primary": "#701BEE",
        "secondary": "#f0c336",
        "text": "#1C0840"
      },
      "typography": {
        "fontFamily": "Roboto"
      },
      "components": {
        "backdrop": {
          "style": {
            "backgroundColor": "#CFD8DC"
          },
          "link": "background.png"
        },
        "button": {
          "contained": {
            "primary": {
              "color": "#FFFFFF"
            }
          }
        },
        "title": {
          "style": {
            "color": "#1C0840"
          },
          "markdown": {
            "strong": {
              "color": "#FF7500"
            }
          }
        },
        "image": {
          "style": {
            "backgroundPosition": "right center",
            "backgroundSize": "contain"
          },
          "styleMobile": {
            "height": "100px"
          },
        }
      }
    }
}
</code>
</pre>

-----

### Styled-components или css

- конфиги хорошо вяжутся с css-in-js
- стили хотелось вынести подальше из-за количества событий на компонент и кастомизации

<pre>
<code>
return (
    <div className="admin-field admin-field_${this.props.orientation}">
      <div className="admin-input${this.props.readOnly && ' admin-input_readonly'}">
        {...}
      </div>
    </div>
)
</code>
</pre>

-----

<p class="reveal justify-start r-hstack"><b>Styled-components:</b></p>

<pre>
<code class="javascript" data-trim data-line-numbers="3-4,7-8">
export const ScreenWrapper = styled.div`
  background-color: ${(props) => props.theme.styles.components.screen.backgroundColor};
  border-radius: ${(props) => (props.theme.layout === 'simple' ? '0' :
    props.theme.layout === 'admitad' ? '6px' : '10px')};
  position: relative;
  max-height: 2000px;
  border: ${(props) => props.theme.layout === 'simple' ?
    `2px solid ${theme.styles.palette.text}` : '0'};
  z-index: 10;
  grid-area: appQuiz;
  margin: 0 auto;
  height: fit-content;
  align-self: center;
`;
</code>
</pre>

<p class="reveal justify-start r-hstack"><i>❌ Do not nest ternary expression.</i></p>

-----

<p class="reveal justify-start r-hstack"><b>Styled-theming:</b></p>

<pre>
<code class="javascript" data-trim data-line-numbers="1-13,16,19">
import theme from 'styled-theming';
const borderRadius = theme('layout', {
    ['simple']: '0',
    ['admitad']: '6px',
    ['default']: '10px',
    ['contented']: '10px'
});
const border = theme('layout', {
    ['simple']: props => `2px solid ${theme.styles.palette.text}`,
    ['admitad']: '0',
    ['default']: '0',
    ['contented']: '0'
});
export const ScreenWrapper = styled.div`
  background-color: ${(props) => props.theme.styles.components.screen.backgroundColor};
  border-radius: ${borderRadius};
  position: relative;
  max-height: 2000px;
  border: ${border};
  z-index: 10;
  grid-area: appQuiz;
  margin: 0 auto;
  height: fit-content;
  align-self: center;
`;
</code>
</pre>

-----

<p class="reveal justify-start r-hstack"><b>Styled-theming:</b></p>

<pre>
<code class="javascript" data-trim>
const windowMarginTabletMobile = theme.variants('layout', 'mode', {
    ['standalone']: {
        ['default']: '0',
        ['simple']: '0 25px',
        ['contented']: '0'
    },
    ['embed']: {
        ['default']: '0',
        ['simple']: '0 25px',
        ['contented']: '0'
    },
    ['popup']: {
        ['default']: '0',
        ['simple']: '0',
        ['contented']: '0'
    }
});
</code>
</pre>

-----

<p class="reveal justify-start r-hstack"><b>Styled-components in json:</b></p>

<pre>
<code class="javascript" data-trim>
export const ScreenWrapper = styled.div((props) => ({
  backgroundColor: props.theme.styles.components.screen.backgroundColor,
  borderRadius: ${borderRadius},
  position: 'relative',
  maxHeight: '2000px',
  border: ${border},
  zIndex: 10,
  gridArea: 'appQuiz',
  margin: '0 auto',
  height: 'fit-content',
  alignSelf: 'center',
}));
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
export const ScreenWrapper = styled.div((props) => {
  const common = {
    backgroundColor: props.theme.styles.components.screen.backgroundColor,
    position: 'relative',
    maxHeight: '2000px',
    zIndex: 10,
    gridArea: 'appQuiz',
    margin: '0 auto',
    height: 'fit-content',
    alignSelf: 'center',
  };
  const simple = {
    border: `2px solid ${props.theme.styles.palette.text}`,
  };
  const default = {
    border: `1px solid ${props.theme.styles.palette.text}`,
    borderRadius: '6px',
  };
  switch (props.theme.layout) {
    case 'simple':
      return { ...common, ...simple };
    case 'default':
      return { ...common, ...default };
    default:
      return common;
  }
});
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
export const Placeholder = styled.span<{ ['data-focused']: boolean }>((props) => {
  const common: CSSObject = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'initial',
    padding: '0 6px',
    transition: 'all ease-in-out 0.2s',
    userSelect: 'none',
    pointerEvents: 'none',
    borderRadius: '4px',
    color: 'gray',
  };
  const focus: CSSObject = {
    top: '0',
    backgroundColor: '#fff'
  };
  return props['data-focused'] ? { ...common, ...focus } : common;
});
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
function memo(fn) {
  let cache = {};
  let result = null;
  return (props) => {
    let updated = false;
    Object.keys(props).forEach((key) => {
      if (JSON.stringify(cache[key]) !== JSON.stringify(props[key])) {
        cache[key] = props[key];
        updated = true;
      }
    })
    if (updated) result = fn(cache);
    return result;
  };
}
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
const placeholder = memo((props) => {
  const common: CSSObject = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'initial',
    padding: '0 6px',
    transition: 'all ease-in-out 0.2s',
    userSelect: 'none',
    pointerEvents: 'none',
    borderRadius: '4px',
    color: 'gray',
  };
  const focus: CSSObject = {
    top: '0',
    backgroundColor: '#fff'
  };
  return props['data-focused'] ? { ...common, ...focus } : common;
});
export const Placeholder = styled.span<{ ['data-focused']: boolean }>(placeholder);
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
export const Placeholder = styled.span.attrs((props) => {
  const focus = {
    top: '0',
    backgroundColor: '#fff'
  };
  const style = props['data-focused'] ? focus : {};
  return { style };
})((props) => ({
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: 'initial',
  padding: '0 6px',
  transition: 'all ease-in-out 0.2s',
  userSelect: 'none',
  pointerEvents: 'none',
  borderRadius: '4px',
  color: 'gray',
}));
</code>
</pre>

-----

<pre>
<code class="javascript" data-trim>
export const Placeholder = styled.span((props) => ({
  position: 'absolute',
  borderRadius: '4px',
  color: 'gray',
  [':after']: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(196,128,128,0.45)',
    zIndex: 2,
  },
}));
</code>
</pre>

-----

### Мерж стилей

<pre>
<code class="javascript" data-trim>
export const Img = styled.div((props) => {
  const mobile = {
    backgroundImage: props.srcMobile ? `url(${props.srcMobile})` : 'none',
    backgroundSize: 'auto',
  };

  const common = {
    backgroundImage: props.srcDesktop ? `url(${props.srcDesktop})` : 'none',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    [`@media only screen and (max-width: 860px)`]: {
      ...mobile, ...props.customStyles?.styleMobile
    },
  };

  return {
    ...common,
    ...props.theme.styles.components.image.style,
    ...props.customStyles?.style,
  };
});
</code>
</pre>