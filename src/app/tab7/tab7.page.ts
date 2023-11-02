import { Component } from '@angular/core';

export class DirectivesModule { }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss'],
})

export class Tab7Page {

  q1 = String.raw`Suppose $a,b,c \in \mathbb{R}$ so that $a+b+c=1$, $a,b,c \geq 0$. Show $ab+ac+bc \leq \frac{1}{3}$. This is an interesting question anyone can understand. Find the maximum of a sum of products given a certain condition. Due to its symmetric nature, this problem is rich in solutions. Below are a few I and others have found. Can you find more?`
  lm = String.raw`We will find the maximum of $f(a,b,c)=ab+ac+bc$ given $g(a,b,c)=a+b+c-1=0$ using Lagrange multipliers. Then 
    \begin{align*}
      \mathcal{L}(a,b,c,\lambda)&=f(a,b,c)+\lambda g(x) \\
      &=ab+ac+bc+\lambda(a+b+c-1). \\
    \end{align*}
    All of the partial derivatives should be zero, so
    \begin{align*}
      & \frac{\partial \mathcal{L}}{\partial a} = b+c+\lambda a = 0 && \frac{\partial \mathcal{L}}{\partial b} = a+c+\lambda b = 0\\
      & \frac{\partial \mathcal{L}}{\partial c} = a+b+\lambda c = 0 && \frac{\partial \mathcal{L}}{\partial \lambda} = a+b+c-1 = 0\\
    \end{align*}
    Adding everything, we get $(2+\lambda)(a+b+c)=0$, and by the last equation, $a+b+c=1$. Then $2+\lambda=0$, so $\lambda=-2$. By the last equation, $a+b=1-c$. Substituting this into $\partial \mathcal{L}/\partial c$, $c=\frac{1}{3}$. Then by symmetry, we get $a=c=b=\frac{1}{3}$. Consider again $f(a,b,c)=ab+ac+bc$. We have found the values for $f$ to obtain its maximum are $a=b=c=\frac{1}{3}$, which gives the desired $ab+ac+bc \leq \frac{1}{3}$.`
  av = String.raw`Let $\vec{u}=a\hat{\imath}+b\hat{\jmath}+c\hat{k}$ and $\vec{v}=b\hat{\imath}+c\hat{\jmath}+a\hat{k}$ be vectors in $\mathbb{R}^3$. Let $\theta$ be the angle between these vectors on the plane containing $\vec{u}$ and $\vec{v}$. Then
    \begin{align*}
      \text{cos}(\theta) = \frac{\vec{u} \cdot \vec{v}}{\lVert \vec{u} \rVert \lVert \vec{v} \rVert} = \frac{ab+ac+bc}{a^2+b^2+c^2} \\
      a^2+b^2+c^2=\frac{a^2+b^2+c^2}{\text{cos}(\theta)}
    \end{align*}
    Also notice $(a+b+c)^2=a^2+b^2+c^2+2(ab+ac+bc)=1$, so 
    \begin{align*}
      \frac{a^2+b^2+c^2}{\text{cos}(\theta)} +2(ab+ac+bc) = (ab+ac+bc)\Big( \frac{1}{\text{cos}(\theta)}+2\Big)=1
    \end{align*}
    Then $ab+ac+bc = (\text{cos}(\theta))/(1+2\text{cos}(\theta))$. Since $\text{cos}(\theta) \leq 1$, $ab+ac+bc \leq \frac{1}{3}$.`
  pr = String.raw`Take $f(x)=(x-a)(x-b)(x-c)$ to be a polynomial in $\mathbb{R}$ with roots $a,b,c$ and let $m=ab+ac+bc$. Then $f(x)=x^3-(a+b+c)x^2+mx-abc$, so 
    \begin{align*}
      f'(x)=3x^2-2(a+b+c)x+m.
    \end{align*}
    Note that all roots of $f$ are real. If $f'$ has no real roots, $f$ does not change concavity so $f$ cannot have more than $1$ real root. But if $f$ has only $1$ real root, $a=b=c$ and $m=\frac{1}{3}$. Since $f'$ is quadratic, the only other case is both roots are real. When $f'(x)=0$, 
    \begin{align*}
      x&=\frac{2\pm \sqrt{4-12m}}{6} \\
      &=\frac{1 \pm \sqrt{1-3m}}{3}
    \end{align*}
    and since both roots are real, $1-3m \geq 0$ which gives us $m=ab+ac+bc \leq \frac{1}{3}$.`
  cs = String.raw`Again let $\vec{u}$ and $\vec{v}$ be the respective vectors $a\hat{\imath}+b\hat{\jmath}+c\hat{k}$ and $b\hat{\imath}+c\hat{\jmath}+a\hat{k}$. By the Cauchy-Schwarz Inequality, $\vec{u} \cdot \vec{v} \leq \lVert \vec{u} \rVert \lVert \vec{v} \rVert$.
    We have $\vec{u} \cdot \vec{v}=ab+ac+bc$ and $\lVert \vec{u} \rVert \lVert \vec{v} \rVert=a^2+b^2+c^2$. Also, $(a+b+c)^2=1$ so $a^2+b^2+c^2=1-2(ab+ac+bc)$. Then $ab+ac+bc \leq 1-2(ab+ac+bc)$, so $3(ab+ac+bc) \leq 1$ and $ab+ac+bc \leq \frac{1}{3}$ as desired.`

  constructor() {

  }

  ionViewDidEnter() {
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
  
}