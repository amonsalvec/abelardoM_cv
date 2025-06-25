import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks

# Función para calcular funciones de estructura
def structure_function(data, q):
    N = len(data)
    sf = np.zeros(N)
    for n in range(1, N):
        sf[n] = np.mean(np.abs(data[n:] - data[:-n])**q)
    return sf

# Función para calcular el espectro de singularidades
def singularity_spectrum(data):
    N = len(data)
    peaks, _ = find_peaks(data)
    singularities = np.zeros(N)
    for i in range(len(peaks)-1):
        singularities[peaks[i]:peaks[i+1]] = np.log(np.abs(data[peaks[i+1]] - data[peaks[i]]))
    return singularities

# Generar datos geofísicos sintéticos (por ejemplo, series econométricas con comportamiento errático e impulsivo)
np.random.seed(42)
data = np.cumsum(np.random.randn(1000) + np.random.choice([-10, 10], 1000, p=[0.95, 0.05]))

# Calcular funciones de estructura para diferentes órdenes q
qs = [1, 2, 3]
structure_functions = [structure_function(data, q) for q in qs]

# Calcular el espectro de singularidades
singularity_spectra = singularity_spectrum(data)

# Graficar los resultados
plt.figure(figsize=(12, 6))

plt.subplot(2, 1, 1)
for i, q in enumerate(qs):
    plt.plot(structure_functions[i], label=f'Structure Function (q={q})')
plt.xlabel('Scale')
plt.ylabel('Structure Function')
plt.legend()
plt.title('Structure Functions')

plt.subplot(2, 1, 2)
plt.plot(singularity_spectra)
plt.xlabel('Time')
plt.ylabel('Singularity Spectrum')
plt.title('Singularity Spectrum')

plt.tight_layout()
plt.show()
