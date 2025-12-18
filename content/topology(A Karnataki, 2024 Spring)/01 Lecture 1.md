---
title : 1) Lecture 1 
order: 1
date: 2025-12-15
tags:
  - topology
  - mathematics
---

# Lecture 1 : Motivation and Definition of a Topology

## Motivation and Thought Process

Topology describes the study of topological properties of topological spaces. These are properties that can be expressed in terms of continuity alone.

In analysis, specifically in metric spaces, the notion of continuity relies on a distance function $d(x,x')$. If $d(x,x')$ is sufficiently small, the points are considered "close". This distance function gives a set $X$ a shape or form.

However, metric spaces are special cases. There are situations where a notion of "nearness" exists—such as pointwise convergence for real-valued functions—where no metric $d$ can adequately capture the convergence.

To generalize this, we replace the distance function with the specification of **open sets**. If a set $U$ is open in $X$ and $x \in U$, then all points $y$ that are "sufficiently close" to $x$ are also in $U$. The shape of $X$ is determined not by a distance function, but by specifying which subsets are considered open.

## Formal Definition: Topological Space

Let $X$ be a set. A **topology** on $X$ is a collection $\mathcal{T}$ of subsets of $X$, such that:

1.  $\emptyset$ and $X$ are both in $\mathcal{T}$.
2.  For any subcollection $\{U_{i}\}_{i \in I}$, the union $\bigcup_{i \in I} U_{i}$ is also in $\mathcal{T}$ (closed under arbitrary unions).
3.  For any finite subcollection $\{U_{1}, \dots, U_{n}\}$, the intersection $\bigcap_{i=1}^{n} U_{i}$ is also in $\mathcal{T}$ (closed under finite intersections).

A **topological space** $(X, \mathcal{T})$ is a set $X$ with a chosen topology $\mathcal{T}$. The subsets $U \in \mathcal{T}$ are said to be **open**.

## Examples of Topologies

### Standard Topology on $\mathbb{R}^n$
Let $X = \mathbb{R}^n$. The standard topology is defined using the Euclidean distance metric $d(x,y)$. A set $U$ is open if for every $x \in U$, there exists an $\epsilon$ such that the open ball $B_{\epsilon}(x)$ is contained in $U$.

### Discrete Topology
Let $X$ be any nonempty set. The **discrete topology** $\mathcal{T}_{disc}$ is the collection of all subsets of $X$, i.e., $\mathcal{T}_{disc} = \mathcal{P}(X)$.

### Trivial Topology
Let $X$ be any nonempty set. The **trivial topology** $\mathcal{T}_{triv}$ consists only of the empty set and $X$ itself, i.e., $\mathcal{T}_{triv} = \{\emptyset, X\}$.

### Finite Complement Topology
Let $X$ be a set. The **finite complement topology** (or cofinite topology) $\mathcal{T}_{f}$ is the collection of subsets $U \subseteq X$ such that the complement $X \setminus U$ is either finite or all of $X$.

### Ray Topology
Let $X = \mathbb{R}$. The **ray topology** is defined as $\mathcal{T}_{ray+} = \{(a, \infty) : a \in \mathbb{R}\} \cup \{\emptyset, \mathbb{R}\}$.

## Comparing Topologies

We can order topologies on the same set based on their size. Let $\mathcal{T}$ and $\mathcal{T}'$ be two topologies on a set $X$.

* We say $\mathcal{T}$ is **coarser** than $\mathcal{T}'$ (or $\mathcal{T}'$ is **finer** than $\mathcal{T}$) if $\mathcal{T} \subseteq \mathcal{T}'$.
* This means every set open in $(X, \mathcal{T})$ is also open in $(X, \mathcal{T}')$.
* The trivial topology is coarser than any other topology, and the discrete topology is finer than any other topology.

## Key Excerpts & Examples

### Example 1.1: The Intermediate Value Theorem (IVT) and Connectedness
This example illustrates how topological properties (like connectedness) affect the behavior of continuous functions.

* **Setup:**
    * Let $X = [0,1]$ and $Y = [0,1] \cup [2,3]$.
    * Let $f: X \to \mathbb{R}$ such that $f(X) \subseteq \{0,1\}$. If $f$ is continuous, the IVT implies $f$ must be constant.
* **The Counter-example:**
    * Define $g: Y \to \mathbb{R}$ by $g([0,1]) = 0$ and $g([2,3]) = 1$.
    * This function is continuous (can be proven via $\epsilon-\delta$), but it takes values $0$ and $1$ without taking $1/2$.
* **Conclusion:** The IVT fails for $Y$ because $Y$ is not "connected", whereas $X$ is. Continuous functions can distinguish these qualitative shape properties.

### The conceptual shift: Metric vs. Topological "Nearness"
Metric spaces are special cases of shapes in mathematics. There are cases where we can sense "nearness" without a metric function.
* **Example:** Pointwise convergence of real-valued functions. If $X$ is the set of real-valued functions on a general domain, there is often no good metric $d$ on $X$ that captures pointwise convergence.
* **Solution:** Instead of distance, we use **open sets**.
    * *Statement:* If $U$ is open in $X$ and $x \in U$, then all $y \in X$ that are "sufficiently close" to $x$ satisfy $y \in U$.

### Example 2.2: Standard Topology on $\mathbb{R}^n$
Recall the $\epsilon$-ball: $B_{\epsilon}(x) := \{ y \in \mathbb{R}^n : d(x,y) < \epsilon \}$.
The standard topology $\mathcal{T}_{\mathbb{R}^n}$ is defined as:
$$\mathcal{T}_{\mathbb{R}^n} := \{ U \subset \mathbb{R}^n : \forall x \in U, \exists \epsilon \text{ such that } B_{\epsilon}(x) \subseteq U \}$$
This matches the definition of open sets in Real Analysis.

### Example 2.6: Asymmetry in Topology (The $\{a, b\}$ case)
Let $X = \{a, b\}$. Consider the intermediate topology $\mathcal{T}_a = \{ \emptyset, \{a\}, X \}$.
* $\{a\}$ is open, so $a$ is "separated" from $b$.
* The only open set containing $b$ is $X$, which also contains $a$.
* **Interpretation:** Point $a$ is "arbitrarily close" to $b$ (you cannot have an open neighborhood of $b$ without $a$), but $b$ is *not* arbitrarily close to $a$ (since $\{a\}$ separates them).
* **Significance:** This asymmetry of nearness is impossible in metric spaces, where distance is symmetric ($d(x,y) = d(y,x)$).

### Example 2.7: Finite Complement (Cofinite) Topology
Let $X$ be any set. The cofinite topology $\mathcal{T}_f$ is defined as:
$$\mathcal{T}_f := \{ U \subseteq X : X \setminus U \text{ is finite or } X \setminus U = X \}$$
* **Lemma 2.8:** This collection satisfies the axioms of a topology.
    * $\emptyset$ is in $\mathcal{T}_f$ (complement is $X$).
    * $X$ is in $\mathcal{T}_f$ (complement is $\emptyset$, which is finite).
    * Arbitrary unions and finite intersections preserve the "finite complement" property.

### Example 2.10: The Ray Topology
Let $X = \mathbb{R}$. The ray topology is defined as:
$$\mathcal{T}_{ray+} := \{ (a, \infty) : a \in \mathbb{R} \} \cup \{ \emptyset, \mathbb{R} \}$$
This forms a topology because the union or intersection of rays $(a, \infty)$ results in another ray or the whole set/empty set.


## Major Difficulties: The Loss of Geometric Comfort

Moving from Metric Spaces to General Topological Spaces introduces several pathologies. Many tools we relied on in Analysis break down.

### 1. The Uselessness of Sequences
In metric spaces, sequences are the primary tool for detecting "closeness" and continuity (Sequential Criterion). In general topology, **sequences are "too thin"** to detect convergence.
* **The Failure:** You can have a point $x$ in the closure of a set $A$ (meaning $x$ is "touching" $A$), yet **no sequence** in $A$ converges to $x$.


### 2. Failure to Separate (Separation Axioms)
In a metric space, if you have two disjoint closed sets, you can always find two disjoint open sets to separate them (Metric spaces are *Normal*).
* **The Failure:** In general topology, we cannot assume that distinct points can even be separated by disjoint neighborhoods ( **Hausdorff**).
* **Consequence:** Limits of sequences might not be unique. A sequence could converge to $x$ and $y$ simultaneously if the space "lumps" them together too primarily.

### 3. Loss of First Countability
Metric spaces are always **First Countable**: every point has a countable basis of neighborhoods (like balls of radius $1/n$).
* **The Failure:** General spaces may not have a countable local basis.
* **Consequence:** This is the structural reason why sequences fail. We can no longer rely on the process of "taking $n \to \infty$" to zoom in on a point arbitrarily well. (Consder the co-countable topology)

---

## Thought Processes and Intuitions

### How to show a set is NOT Open
Proving a set is not open is an exercise in finding a "weak point."

**The Step-by-Step Thought Process:**

Look at the set $U$. Do not worry about points deep inside the "interior." Look for a point $p \in U$ that lies on the "edge" or "boundary" of the definition. 

For $U$ to be open, *every* point must bring its own open neighborhood that stays entirely inside $U$.

Just show that **every** possible open set containing $p$ must necessarily contain at least one point $y$ such that $y \notin U$.

If working with a Basis $\mathcal{B}$: Show that for *any* basic element $B \in \mathcal{B}$ containing $p$, $B$ is not contained in $U$
### How to show a set IS Open


**1. The Basis Method**
* **Strategy:** "Embed a basic element."
* **Formal:** Pick an arbitrary $x \in U$. Show there exists a basis element $B$ such that $x \in B \subseteq U$.

**2. The Direct Definition**
* **Strategy:** Show it belongs to the topology $\mathcal{T}$ explicitly.
 Useful for simple topologies (like Finite Complement or Discrete) where you just check the condition (e.g., "Is the complement finite?").

**3. Closed Complement**
* **Strategy:** Check if $U^c$ (the complement) is Closed.
* **Why use it:** Sometimes it is much easier to show a set contains all its limit points (closed) than to construct neighborhoods. If $U^c$ is closed, $U$ is open.

**4. The Inverse Image**
* **Strategy:** Write $U$ as $f^{-1}(V)$ where $f$ is a known continuous function and $V$ is a known open set.
* **Why use it:** Extremely fast.
    * *Example:* Show $\{(x,y) : x^2 + y^2 < 1\}$ is open.
    * *Proof:* Let $f(x,y) = x^2 + y^2$. This is a polynomial (continuous). The set is $f^{-1}((-\infty, 1))$. Since $(-\infty, 1)$ is open in $\mathbb{R}$, the pre-image is open.


### Example:


* **Topology:** The Ray Topology on $\mathbb{R}$, where open sets are $\mathcal{T}_{ray+} = \{ (c, \infty) : c \in \mathbb{R} \} \cup \{ \emptyset, \mathbb{R} \}$.
* **Problem :** Is $S = [a, b)$ (where $a < b$) open in the ray topology?.

    Let's pick any point $p \in S$. For instance, let $p = a$.


    FTSOC, say $S$ is open. There must exist **some** open set $U \in \mathcal{T}_{ray+}$ such that:
    $$a \in U \subseteq S$$
    In this topology, the only open sets containing $a$ are rays of the form $(c, \infty)$ where $c < a$ (or the whole space $\mathbb{R}$).

    Consider any such open ray $U = (c, \infty)$ containing $a$. Because $U$ extends to infinity, it contains arbitrarily large numbers. Since $b+1 > b > a > c$, clearly $y \in (c, \infty)$. However, $y \notin [a, b)$. Contradiction
